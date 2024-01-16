import { Response, NextFunction } from "express";
import { asyncHandler } from "@core/middlewares";
import { ExtendedRequest } from "@core/interfaces";
import Container from "typedi";
import ResourceService from "./resource.service";

class ResourceController {
  private readonly resourceService: ResourceService = Container.get(ResourceService);

  constructor() {}

  getResources = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      const response = await this.resourceService.getAllResources();
      res.status(200).json(response);
    }
  );

  getResource = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      const response = await this.resourceService.getResourceById(req.params.id);
      res.status(200).json(response);
    }
  );

  createResource = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      let response = await this.resourceService.createResource(req.body);
      res.status(200).json(response);
    }
  );

  updateResource = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      const response = await this.resourceService.updateResource(
        req.params.id,
        req.body
      );
      res.status(200).json(response);
    }
  );

  deleteResource = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      let response = await this.resourceService.deleteResource(req.params.id);
      res.status(200).json(response);
    }
  );
}

export default new ResourceController();
