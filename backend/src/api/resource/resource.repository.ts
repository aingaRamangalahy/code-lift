import { IResourceDocument } from "./resource.interface";
import { BaseRepository } from "@core/repositories";
import { IFindPayload } from "@core/interfaces";

export class ResourceRepository extends BaseRepository<IResourceDocument> {
  addResource = (resource: any) => {
    return this.create(resource);
  };

  getResources = (payload: IFindPayload) => {
    return this.find(payload);
  };

  getOneResource = (payload: IFindPayload) => {
    return this.findOne(payload);
  };

  getResourceById = (id: string, populateFields = []) => {
    return this.findById(id, populateFields);
  };

  updateResource = (id: string, resource: IResourceDocument) => {
    return this.update(id, resource);
  };

  deleteResource = (id: string) => {
    return this.delete(id);
  };
}