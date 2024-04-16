import { ICommentDocument } from "./comment.interface";
import { BaseRepository } from "@core/repositories";
import { IFindPayload } from "@core/interfaces";

export class CommentRepository extends BaseRepository<ICommentDocument> {
  addComment = (comment: any) => {
    return this.create(comment);
  };

  getComments = (payload: IFindPayload) => {
    return this.find(payload);
  };

  getOneComment = (payload: IFindPayload) => {
    return this.findOne(payload);
  };

  getCommentById = (id: string, populateFields: string[] = []) => {
    return this.findById(id, populateFields);
  };

  updateComment = (id: string, comment: ICommentDocument) => {
    return this.update(id, comment);
  };

  deleteComment = (id: string) => {
    return this.delete(id);
  };
}