import { Request } from "express"
import { IUserDocument } from "../../modules/user/user.interface";
export interface ExtendedRequest extends Request {
    user?: IUserDocument;
}