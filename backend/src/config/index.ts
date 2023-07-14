import * as dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const TEST_PORT = process.env.TEST_PORT;
export const API_URL = process.env.API_URL;
export const BODY_PARSER_LIMIT = process.env.BODY_PARSER_LIMIT;
export const DB_URI = process.env.DB_URI;
export const FILE_UPLOAD_PATH = process.env.FILE_UPLOAD_PATH;
export const MAX_FILE_UPLOAD = process.env.MAX_FILE_UPLOAD;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRE = process.env.JWT_EXPIRE;
export const JWT_COOKIE_EXPIRE = process.env.JWT_COOKIE_EXPIRE;

export const config = {
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "testing"
}