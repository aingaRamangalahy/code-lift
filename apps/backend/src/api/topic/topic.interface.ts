import { Document } from 'mongoose';
import { ITopicData } from '@cl/types';
export interface ITopicDocument extends ITopicData, Document {}
