import  crypto from "crypto";
import { Service } from 'typedi';
import { ErrorResponse } from '@core/utils';
import { UserRepository } from '@api/user/user.repository';
import User from '@api/user/user.model';
import { IUserDocument } from '@api/user/user.interface';
import { API_URL } from '@config/index';
import { IFindPayload } from "@core/interfaces";

@Service()
export default class AuthService {
    private readonly userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository(User);
    }

    login = async (credentials) => {
        try {
            const { email, password } = credentials;

            if (!email || !password) {
                throw new ErrorResponse('Invalid email or password', 400);
            }

            const getUserPayload: IFindPayload = {
                filter: { email },
                additionalField: 'password',
            } 
            const user = await this.userRepository.getOneUser(getUserPayload)

            if (!user) {
                throw new ErrorResponse(
                    `User with email: ${email} not found`,
                    401
                );
            }

            // check if password match
            const isMatched = await user.matchPassword(password);

            if (!isMatched) {
                throw new ErrorResponse('Wrong password', 401);
            }

            await this.userRepository.updateUser(user._id, {
                connected: true,
            } as IUserDocument);
            return this.generateResponseToken(user);
        } catch (error) {
            throw error;
        }
    };

    register = async (userPayload) => {
        try {
            const { name, email, password, role } = userPayload;

            const user = await this.userRepository.addUser({
                name,
                email,
                password,
                role,
            });

            return this.generateResponseToken(user);
        } catch (error) {
            throw error;
        }
    };

    logout = async (id: string) => {
        const user = await this.userRepository.findById(id);
        await this.userRepository.updateUser(user._id, {
            connected: false,
        } as IUserDocument);
        return {
            success: true,
            data: user,
        };
    };

    forgotPassword = async (email: string) => {
        const user = await this.userRepository.findOne({ filter: { email } })
        
        if (!user) {
            throw new ErrorResponse('User not found', 404);
        }
        
        const resetToken = user.generateResetPasswordToken();
        await user.save({ validateBeforeSave: false });
        const resetUrl = `${API_URL}/api/auth/reset-passwrod/${resetToken}`;
        try {
            //await sendResetPasswordEmail(email, token); TODO: implementation of the email function
            return {
                success: true,
                data: {
                    resetUrl,
                },
            }
        } catch (error) {
            await this.userRepository.updateUser(user._id, {
                resetPasswordToken: undefined,
                resetPasswordExpire: undefined,
            } as IUserDocument);
            throw new ErrorResponse('Email not sent', 500)
        }

    }

    resetPassword = async (password: string, token: string) => {
        const resetPasswordToken = crypto
            .createHash("sha256")
            .update(token)
            .digest("hex")
        const getUserPayload = {
            filter: {
                resetPasswordToken,
                resetPasswordExpire: { $gt: Date.now() }
            }
        }
        const user = await this.userRepository.findOne(getUserPayload);
        if (!user) {
            throw new ErrorResponse('Invalide token', 400)
        }

        await this.userRepository.updateUser(user._id, {
            password,
            resetPasswordToken:undefined,
            resetPasswordExpire: undefined,
        } as IUserDocument)

        return this.generateResponseToken(user);
    }

    generateResponseToken = (user: IUserDocument) => {
        // generate token
        const token = user.generateToken();
        const data = {
            _id: user._id,
            role: user.role,
            email: user.email,
            name: user.name,
        };
        return {
            success: true,
            data,
            token,
        };
    };
}
