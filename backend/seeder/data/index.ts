import * as fs from "fs";

export const users = JSON.parse(fs.readFileSync('users.json', 'utf-8'))
export const categories = JSON.parse(fs.readFileSync('categories.json', 'utf-8'))
export const resources = JSON.parse(fs.readFileSync('resources.json', 'utf-8'))
export const topics = JSON.parse(fs.readFileSync('topics.json', 'utf-8'))