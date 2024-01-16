import { Service } from "typedi";
import { ICategoryDocument } from "./category.interface";
import Category from "./category.model";
import { ErrorResponse } from "@core/utils";
import { CategoryRepository } from "./category.repository";
import { IFindPayload } from "@core/interfaces";

@Service()
export default class CategoryService {
    private readonly categoryRepository: CategoryRepository;

    constructor() {
        this.categoryRepository = new CategoryRepository(Category);
    }

    createCategory = async (categoryPayload: ICategoryDocument) => {
        try {
            const category = await this.categoryRepository.addCategory(categoryPayload);
            return {
                success: true,
                data: category,
            };
        } catch (error) {
            /**thorw errors to let erroHandler handle them */
            throw error;
        }
    };

    getAllCategories = async () => {
        try {
            const payload: IFindPayload = {
                populateFields: ['topics']
            }
            const categories = await this.categoryRepository.getCategories(payload);
            return {
                success: true,
                data: categories,
            };
        } catch (error) {
            throw error;
        }
    };

    getCategoryById = async (id: string) => {
        try {
            const populateFields = ['topics'];
            const category = await this.categoryRepository.getCategoryById(id, populateFields);

            if (!category) {
                throw new ErrorResponse(`Category with id: ${id} not found`, 404);
            }

            return {
                success: true,
                data: category,
            };
        } catch (error) {
            throw error;
        }
    };

    updateCategory = async (id: string, categoryPayload: ICategoryDocument) => {
        try {
            const category = await this.categoryRepository.updateCategory(id, categoryPayload);

            if (!category) {
                throw new ErrorResponse(`Category with id: ${id} not found`, 404);
            }

            return {
                success: true,
                data: category,
            };

        } catch (error) {
            throw error;
        }
    };

    deleteCategory = async (id: string) => {
        try {
            const category = await this.categoryRepository.deleteCategory(id);
            if (!category) {
                throw new ErrorResponse(`Category with id: ${id} not found`, 404);
            }
            return {
                success: true,
                data: `Category removed successfully`,
            };
            
        } catch (error) {
            throw error;
        }
    };
}