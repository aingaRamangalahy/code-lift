import 'reflect-metadata';
import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import Server from '../../src/server';
import authFixture from '../fixtures/auth';
const app = Server.getServer();

describe('Auth', () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });

    describe('POST /api/auth/register', () => {
        it('should return success and token if user is created', async () => {
            const scenario = authFixture.registerSuccess;
            const response = await request(app)
                .post('/api/auth/register')
                .send(scenario.request.body);

            expect(response.status).toBe(200);
            expect(response.body.token).toBeDefined();
            expect(response.body.data).toMatchObject(
                scenario.response.body.data
            );
        });

        it('should return error if the user already exists', async () => {
            const scenario = authFixture.registerError;
            const response = await request(app)
                .post('/api/auth/register')
                .send(scenario.request.body);
            expect(response.status).toBe(scenario.response.status);
            expect(response.body).toMatchObject(scenario.response.body);
        });
    });

    describe('POST /api/auth/login', () => {
        it('should return a valid JWT token if credentials are correct', async () => {
            const scenario = authFixture.loginSuccess;
            const response = await request(app)
                .post('/api/auth/login')
                .send(scenario.request.body);

            expect(response.status).toBe(200);
            expect(response.body.token).toBeDefined();
            expect(response.body.data).toMatchObject(
                scenario.response.body.data
            );
        });

        it('should return 401 error if credentials are incorrect', async () => {
            const scenario = authFixture.loginFailure;
            const response = await request(app)
                .post('/api/auth/login')
                .send(scenario.request.body);

            expect(response.status).toBe(401);
            expect(response.body).toEqual(scenario.response.body);
        });
    });

    // Add more tests for other AuthRoute endpoints
});
