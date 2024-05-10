import crypto from 'crypto';
import { ErrorResponse } from '@core/utils';
import User from '@api/user/user.model';
import { IUserDocument } from '@api/user/user.interface';
import { API_URL } from '@config/index';

export const login = async (credentials) => {
    try {
        const { email, password } = credentials;

        if (!email || !password) {
            throw new ErrorResponse('Invalid email or password', 400);
        }

        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            throw new ErrorResponse(`User with email: ${email} not found`, 401);
        }

        // check if password match
        const isMatched = await user.matchPassword(password);

        if (!isMatched) {
            throw new ErrorResponse('Wrong password', 401);
        }

        user.connected = true;
        await user.save();
        return generateResponseToken(user);
    } catch (error) {
        throw error;
    }
};

export const register = async (userPayload) => {
    try {
        const { name, email, password, role } = userPayload;

        const user = await User.create({
            name,
            email,
            password,
            role,
        });

        return generateResponseToken(user);
    } catch (error) {
        throw error;
    }
};

export const logout = async (id: string) => {
    const user = await User.findById(id);
    user.connected = false;
    await user.save();
    return {
        success: true,
        data: user,
    };
};

export const forgotPassword = async (email: string) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new ErrorResponse('User not found', 404);
    }

    const resetToken = user.generateResetPasswordToken();
    await user.save({ validateBeforeSave: false });
    const resetUrl = `${API_URL}/api/auth/reset-password/${resetToken}`;
    try {
        //await sendResetPasswordEmail(email, token); TODO: implementation of the email function
        return {
            success: true,
            data: {
                resetUrl,
            },
        };
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();
        throw new ErrorResponse('Email not sent', 500);
    }
};

export const resetPassword = async (password: string, token: string) => {
    const resetPasswordToken = crypto
        .createHash('sha256')
        .update(token)
        .digest('hex');
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
        throw new ErrorResponse('Invalid token', 400);
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    return generateResponseToken(user);
};

const generateResponseToken = (user: IUserDocument) => {
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
