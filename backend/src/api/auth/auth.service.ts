import  crypto from "crypto";
import { Service } from 'typedi';
import { ErrorResponse } from '@core/utils';
import { UserRepository } from '@api/user/user.repository';
import User from '@api/user/user.model';
import { IUserDocument } from '@api/user/user.interface';
import { API_URL } from '@config/index';

@Service()
export default class AuthService {
    private readonly userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository(User);
    }

    singin = async (credentials) => {
        try {
            const { email, password } = credentials;

            if (!email || !password) {
                throw new ErrorResponse('Invalid email or password', 400);
            }

            const user = await this.userRepository.getOneUser(
                { email },
                'password'
            );

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

            this.userRepository.updateUser(user._id, {
                ...user,
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

    signout = async (id: string) => {
        const user = await this.userRepository.findById(id);
        this.userRepository.updateUser(user._id, {
            ...user,
            connected: false,
        } as IUserDocument);
        return {
            success: true,
            data: user,
        };
    };

    forgotPassword = async (email: string) => {
        const user = await this.userRepository.findOne({ email })
        
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
            this.userRepository.updateUser(user._id, {
                ...user,
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
        const user = await this.userRepository.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        });
        if (!user) {
            throw new ErrorResponse('Invalide token', 400)
        }

        this.userRepository.updateUser(user._id, {
            ...user,
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
