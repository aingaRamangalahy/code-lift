import Topic from './topic.model';
import { ErrorResponse } from '@core/utils';

export const getAllTopics = async () => {
    try {
        const topics = await Topic.find();
        return {
            success: true,
            data: topics,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to fetch topics', 500);
    }
};

export const getTopicById = async (topicId) => {
    try {
        const topic = await Topic.findById(topicId);
        if (!topic) {
            throw new ErrorResponse('Topic not found', 404);
        }
        return {
            success: true,
            data: topic,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to fetch topic', 500);
    }
};

export const createTopic = async (topicData) => {
    try {
        const topic = await Topic.create(topicData);
        return {
            success: true,
            data: topic,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to create topic', 500);
    }
};

export const updateTopic = async (topicId, topicData) => {
    try {
        const topic = await Topic.findByIdAndUpdate(topicId, topicData, {
            new: true,
        });
        if (!topic) {
            throw new ErrorResponse('Topic not found', 404);
        }
        return {
            success: true,
            data: topic,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to update topic', 500);
    }
};

export const deleteTopic = async (topicId) => {
    try {
        const topic = await Topic.findByIdAndDelete(topicId);
        if (!topic) {
            throw new ErrorResponse('Topic not found', 404);
        }
        return {
            success: true,
            data: topic,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to delete topic', 500);
    }
};
