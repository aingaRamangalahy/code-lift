import * as fs from 'fs';
import * as path from 'path';

export const users = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8')
);
export const categories = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'categories.json'), 'utf-8')
);
export const resources = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'resources.json'), 'utf-8')
);
export const topics = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'topics.json'), 'utf-8')
);
