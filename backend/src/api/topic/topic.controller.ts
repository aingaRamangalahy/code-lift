import { Response, NextFunction } from "express";
import { asyncHandler } from "@core/middlewares";
import { ExtendedRequest } from "@core/interfaces";
import Container from "typedi";
import TopicService from "./topic.service";

class TopicController {
  private readonly topicService: TopicService = Container.get(TopicService);

  constructor() {}

  getTopics = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      const response = await this.topicService.getAllTopics();
      res.status(200).json(response);
    }
  );

  getTopic = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      const response = await this.topicService.getTopicById(req.params.id);
      res.status(200).json(response);
    }
  );

  createTopic = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      let response = await this.topicService.createTopic(req.body);
      res.status(200).json(response);
    }
  );

  updateTopic = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      const response = await this.topicService.updateTopic(
        req.params.id,
        req.body
      );
      res.status(200).json(response);
    }
  );

  deleteTopic = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      let response = await this.topicService.deleteTopic(req.params.id);
      res.status(200).json(response);
    }
  );
}

export default new TopicController();
