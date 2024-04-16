import { Document } from 'mongoose';
import { ICategory } from '@cl/types';

export interface ICategoryDocument extends ICategory, Document {}
