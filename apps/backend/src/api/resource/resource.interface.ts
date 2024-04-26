import { Document } from 'mongoose';
import { IResourceData } from '@cl/types';

export interface IResourceDocument extends IResourceData, Document {}
