import { Document } from 'mongoose';
import { IComment } from '@cl/types';


export interface ICommentDocument extends IComment, Document {}
