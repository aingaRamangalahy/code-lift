import { Response, NextFunction } from "express";
import { asyncHandler } from "@core/middlewares";
import { ExtendedRequest } from "@core/interfaces";
import Container from "typedi";
import CommentService from "./comment.service";

class CommentController {
  private readonly commentService: CommentService = Container.get(CommentService);

  constructor() {}

  getComments = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      const response = await this.commentService.getAllComments();
      res.status(200).json(response);
    }
  );

  getComment = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      const response = await this.commentService.getCommentById(req.params.id);
      res.status(200).json(response);
    }
  );

  createComment = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      let response = await this.commentService.createComment(req.body);
      res.status(200).json(response);
    }
  );

  updateComment = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      const response = await this.commentService.updateComment(
        req.params.id,
        req.body
      );
      res.status(200).json(response);
    }
  );

  deleteComment = asyncHandler(
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      let response = await this.commentService.deleteComment(req.params.id);
      res.status(200).json(response);
    }
  );
}

export default new CommentController();
