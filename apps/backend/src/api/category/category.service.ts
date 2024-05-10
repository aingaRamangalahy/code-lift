import Category from './category.model';
import { ErrorResponse } from '@core/utils';

export const getCategories = async () => {
    try {
        const categories = await Category.find();
        return {
            success: true,
            data: categories,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to fetch categories', 500);
    }
};

export const getCategoryById = async (categoryId) => {
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            throw new ErrorResponse('Category not found', 404);
        }
        return {
            success: true,
            data: category,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to fetch category', 500);
    }
};

export const createCategory = async (categoryData) => {
    try {
        const category = await Category.create(categoryData);
        return {
            success: true,
            data: category,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to create category', 500);
    }
};

export const updateCategory = async (categoryId, categoryData) => {
    try {
        const category = await Category.findByIdAndUpdate(
            categoryId,
            categoryData,
            { new: true },
        );
        if (!category) {
            throw new ErrorResponse('Category not found', 404);
        }
        return {
            success: true,
            data: category,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to update category', 500);
    }
};

export const deleteCategory = async (categoryId) => {
    try {
        const category = await Category.findByIdAndDelete(categoryId);
        if (!category) {
            throw new ErrorResponse('Category not found', 404);
        }
        return {
            success: true,
            data: category,
        };
    } catch (error) {
        throw new ErrorResponse('Failed to delete category', 500);
    }
};
