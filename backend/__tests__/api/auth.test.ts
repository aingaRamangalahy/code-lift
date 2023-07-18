import 'reflect-metadata';
import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import Server from '../../src/server';
const app = Server.getServer();

let user;

describe('Auth', () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
        user = {
            name: 'test',
            email: 'test@test.com',
            password: 'azertY',
            role: 'sender',
        };
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
        user = null;
    });

    describe('POST /api/auth/signup', () => {
        it('should return a valid JWT token if user is created', async () => {
            const response = await request(app)
                .post('/api/auth/signup')
                .send(user);

            expect(response.status).toBe(200);
            expect(response.body.token).toBeDefined();
            expect(typeof response.body.token).toBe('string')
        });
    });

    describe('POST /api/auth/signin', () => {
        it('should return a valid JWT token if credentials are correct', async () => {
            const response = await request(app)
                .post('/api/auth/signin')
                .send({ email: 'test@test.com', password: 'azertY' });

            expect(response.status).toBe(200);
            expect(response.body.token).toBeDefined();
        });

        it('should return 401 error if credentials are incorrect', async () => {
            const response = await request(app)
                .post('/api/auth/signin')
                .send({ email: 'test@test.com', password: 'wrongpassword' });

            expect(response.status).toBe(401);
            expect(response.body.errorMessage).toBe('\tWrong password');
        });
    });

    // Add more tests for other AuthRoute endpoints
});
