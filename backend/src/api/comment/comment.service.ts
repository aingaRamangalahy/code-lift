import { Service } from "typedi";
import { ICommentDocument } from "./comment.interface";
import Comment from "./comment.model";
import { ErrorResponse } from "@core/utils";
import { CommentRepository } from "./comment.repository";
import { IFindPayload } from "@core/interfaces";

@Service()
export default class CommentService {
    private readonly commentRepository: CommentRepository;

    constructor() {
        this.commentRepository = new CommentRepository(Comment);
    }

    createComment = async (commentPayload: ICommentDocument) => {
        try {
            const comment = await this.commentRepository.addComment(commentPayload);
            return {
                success: true,
                data: comment,
            };
        } catch (error) {
            /**thorw errors to let erroHandler handle them */
            throw error;
        }
    };

    getAllComments = async () => {
        try {
            const commentPayload: IFindPayload = {
                populateFields: ["user", "parentComment", "resource"]
            } 
            const comments = await this.commentRepository.getComments(commentPayload);
            return {
                success: true,
                data: comments,
            };
        } catch (error) {
            throw error;
        }
    };

    getCommentById = async (id: string) => {
        try {
            const populateFields = ["user", "parentComment", "resource"];
            const comment = await this.commentRepository.getCommentById(id, populateFields);

            if (!comment) {
                throw new ErrorResponse(`Comment with id: ${id} not found`, 404);
            }

            return {
                success: true,
                data: comment,
            };
        } catch (error) {
            throw error;
        }
    };

    updateComment = async (id: string, commentPayload: ICommentDocument) => {
        try {
            const comment = await this.commentRepository.updateComment(id, commentPayload);

            if (!comment) {
                throw new ErrorResponse(`Comment with id: ${id} not found`, 404);
            }

            return {
                success: true,
                data: comment,
            };

        } catch (error) {
            throw error;
        }
    };

    deleteComment = async (id: string) => {
        try {
            const comment = await this.commentRepository.deleteComment(id);
            if (!comment) {
                throw new ErrorResponse(`Comment with id: ${id} not found`, 404);
            }
            return {
                success: true,
                data: `Comment removed successfully`,
            };
            
        } catch (error) {
            throw error;
        }
    };
}