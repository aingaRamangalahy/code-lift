import { Document } from "mongoose";
import  { IResource } from "@cl/types";

export interface IResourceDocument extends IResource, Document {
}