import { Request } from "express"
import { IUserDocument } from "@api/user/user.interface";
export interface ExtendedRequest extends Request {
    user?: IUserDocument;
}