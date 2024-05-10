import Comment from './comment.model';
import { ErrorResponse } from '@core/utils';

export const getComments = async () => {
    try {
        const comments = await Comment.find();
        return {
            success: true,
            data: comments,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to fetch comments', 500);
    }
};

export const getCommentById = async (commentId) => {
    try {
        const comment = await Comment.findById(commentId);
        if (!comment) {
            throw new ErrorResponse('Comment not found', 404);
        }
        return {
            success: true,
            data: comment,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to fetch comment', 500);
    }
};

export const createComment = async (commentData) => {
    try {
        const comment = await Comment.create(commentData);
        return {
            success: true,
            data: comment,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to create comment', 500);
    }
};

export const updateComment = async (commentId, commentData) => {
    try {
        const comment = await Comment.findByIdAndUpdate(
            commentId,
            commentData,
            { new: true },
        );
        if (!comment) {
            throw new ErrorResponse('Comment not found', 404);
        }
        return {
            success: true,
            data: comment,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to update comment', 500);
    }
};

export const deleteComment = async (commentId) => {
    try {
        const comment = await Comment.findByIdAndDelete(commentId);
        if (!comment) {
            throw new ErrorResponse('Comment not found', 404);
        }
        return {
            success: true,
            data: comment,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to delete comment', 500);
    }
};
