import { Response, NextFunction } from "express";
import { asyncHandler } from "@core/middlewares";
import { ExtendedRequest } from "@core/interfaces";
import Container from "typedi";
import CategoryService from "./category.service";

class CategoryController {
  private readonly categoryService: CategoryService = Container.get(CategoryService);

  constructor() {}

  getCategories = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      const response = await this.categoryService.getAllCategories();
      res.status(200).json(response);
    }
  );

  getCategory = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      const response = await this.categoryService.getCategoryById(req.params.id);
      res.status(200).json(response);
    }
  );

  createCategory = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      let response = await this.categoryService.createCategory(req.body);
      res.status(200).json(response);
    }
  );

  updateCategory = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      const response = await this.categoryService.updateCategory(
        req.params.id,
        req.body
      );
      res.status(200).json(response);
    }
  );

  deleteCategory = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      let response = await this.categoryService.deleteCategory(req.params.id);
      res.status(200).json(response);
    }
  );
}

export default new CategoryController();
