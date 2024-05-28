import { Document } from 'mongoose';
import { IResourcePayloadData } from '@cl/types';

export interface IResourceDocument extends IResourcePayloadData, Document {}
