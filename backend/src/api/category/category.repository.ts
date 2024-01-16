import { ICategoryDocument } from "./category.interface";
import { BaseRepository } from "@core/repositories";
import { IFindPayload } from "@core/interfaces";

export class CategoryRepository extends BaseRepository<ICategoryDocument> {
  addCategory = (category: any) => {
    return this.create(category);
  };

  getCategories = (payload: IFindPayload) => {
    return this.find(payload);
  };

  getOneCategory = (payload: IFindPayload) => {
    return this.findOne(payload);
  };

  getCategoryById = (id: string, populateFields = []) => {
    return this.findById(id, populateFields);
  };

  updateCategory = (id: string, category: ICategoryDocument) => {
    return this.update(id, category);
  };

  deleteCategory = (id: string) => {
    return this.delete(id);
  };
}