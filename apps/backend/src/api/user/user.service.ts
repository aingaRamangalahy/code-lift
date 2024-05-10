import User from './user.model';
import { ErrorResponse } from '@core/utils';

export const getAllUsers = async () => {
    try {
        const users = await User.find();
        return {
            success: true,
            data: users,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to fetch users', 500);
    }
};

export const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new ErrorResponse('User not found', 404);
        }
        return {
            success: true,
            data: user,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to fetch user', 500);
    }
};

export const createUser = async (userData) => {
    try {
        const user = await User.create(userData);
        return {
            success: true,
            data: user,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to create user', 500);
    }
};

export const updateUser = async (userId, userData) => {
    try {
        const user = await User.findByIdAndUpdate(userId, userData, {
            new: true,
        });
        if (!user) {
            throw new ErrorResponse('User not found', 404);
        }
        return {
            success: true,
            data: user,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to update user', 500);
    }
};

export const deleteUser = async (userId) => {
    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            throw new ErrorResponse('User not found', 404);
        }
        return {
            success: true,
            data: user,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to delete user', 500);
    }
};
