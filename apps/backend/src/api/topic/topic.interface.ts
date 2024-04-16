import { Document } from 'mongoose';
import { ITopic } from '@cl/types';
export interface ITopicDocument extends ITopic, Document {}
