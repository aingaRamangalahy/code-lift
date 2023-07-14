import 'reflect-metadata';
import request from 'supertest';
import Server from '../src/server';

const app = Server.getServer();

describe('GET /', () => {
    it('should return status 200', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    it('should return the write message body', async () => {
        const response = await request(app).get('/');
        expect(response.body).toEqual({ success: true, message: 'API up!' });
    });
});
