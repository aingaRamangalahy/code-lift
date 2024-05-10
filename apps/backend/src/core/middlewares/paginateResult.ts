import { logger } from '@config/logger';
import { NextFunction } from 'express';
import { Document, Model } from 'mongoose';

export interface PaginatedResult<T extends Document> {
    success: boolean;
    count: number;
    data: T[];
    pagination: {
        next?: { page: number; limit: number };
        prev?: { page: number; limit: number };
    };
}
const countDocuments = async <T>(model: Model<T>): Promise<number> => {
    try {
        return await model.countDocuments();
    } catch (error) {
        logger.error(error);
        throw error;
    }
};

export const paginate =
    <T extends Document>(model: Model<T>, populate: string) =>
    async (req: any, res: any, next: NextFunction) => {
        try {
            let query;

            const reqQuery = { ...req };
            const removeFields = ['select', 'sort', 'page', 'limit'];

            removeFields.forEach((field) => delete reqQuery[field]);

            let queryString = JSON.stringify(reqQuery);
            queryString = queryString.replace(
                /\b(gt|gte|lt|lte|in)\b/g,
                (match) => `$${match}`,
            );

            query = model.find(JSON.parse(queryString));

            if (req.select) {
                const fields = req.select.split(',').join(' ');
                query = query.select(fields);
            }

            if (req.sort) {
                const sortBy = req.sort.split(',').join(' ');
                query = query.sort(sortBy);
            } else {
                query = query.sort('-createdAt');
            }

            const page = +req.page || 1;
            const limit = +req.limit || 10;
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const total = await countDocuments(model);

            query = query.skip(startIndex).limit(limit);

            if (populate) {
                populate = populate.split(',').join(' ');
                query = query.populate(populate);
            }

            const results = await query;

            const pagination: any = {};

            if (endIndex < total) {
                pagination.next = { page: page + 1, limit };
            }

            if (startIndex > 0) {
                pagination.prev = { page: page - 1, limit };
            }

            res.advancedResults = {
                success: true,
                count: results.length,
                pagination,
                data: results,
            };

            next();
        } catch (error) {
            logger.error(error);
            throw error;
        }
    };
