import 'reflect-metadata';
import request from 'supertest';
import Server from '../../server';
import { IUserDocument } from './user.interface';
import userModel from './user.model';
import { UserRepository } from './user.repository';
import UserService from './user.service';

const apiEndPoint = '/api/users';

describe('USER API Endpoints', () => {
  let app;
  let userService: UserService;
  let userData
  let mockSuccessResponse;
  let mockErrorResponse


  beforeAll(() => {
    app = Server.getServer()
    userService = new UserService();

    userData = {
      _id: "64a7fca27784b6041701ed73",
      name: 'ainga',
      email: 'test@test.com',
      role: 'sender',
      connected: true,
      activated: false,
    };

    mockSuccessResponse = {
      success: true,
      data: userData
    }

    mockErrorResponse = {
      success: false,
      message: 'Error message'
    }
  });

  describe('GET /api/users/:id', () => {
    it('should return a user if the ID exists', async () => {
      jest.spyOn(userService, 'getUserById').mockResolvedValue(mockSuccessResponse);
      const response = await request(app).get(
        `${apiEndPoint}/64a7fca27784b6041701ed73`
      );
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockSuccessResponse)
    });

    it('should return a 404 error if the ID does not exists', async () => {
      const response = await request(app).get(`${apiEndPoint}/404`);
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const newUser = {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: '1234asD!',
      };

      const response = await request(app).post(`${apiEndPoint}`).send(newUser);

      expect(response.status).toBe(201);
      expect(response.body.data.name).toBe(newUser.name);
      expect(response.body.data.email).toBe(newUser.email);
    });

    // it('should return 403 error if jwt token is not provided', async () => {
    //   const newUser = {
    //     name: 'Jane Smith',
    //     email: 'jane@example.com',
    //     password: '1234asD!',
    //   };

    //   const response = await request(app).post(`${apiEndPoint}`).send(newUser);

    //   expect(response.status).toBe(500);
    //   expect(response.body.success).toBe(false);
    // });

    it('should return a 400 error if name is missing', async () => {
      const newUser = { email: 'jane@example.com' };

      const response = await request(app).post(`${apiEndPoint}`).send(newUser);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    // Add more test cases for input validation, error scenarios, etc.
  });

  describe('PUT /api/users/:id', () => {
    it('should update an existing user', async () => {
      const updatedUser = {
        name: 'Jane Johnson',
        email: 'jane@example.com',
      };
      const userId = '64a7fca27784b6041701ed73';

      const response = await request(app)
        .put(`${apiEndPoint}/${userId}`)
        .send(updatedUser);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(userId);
      expect(response.body.name).toBe(updatedUser.name);
      expect(response.body.email).toBe(updatedUser.email);
    });

    it('should return a 404 error if the user ID does not exist', async () => {
      const updatedUser = {
        name: 'Jane Johnson',
        email: 'jane@example.com',
      };
      const userId = 404;

      const response = await request(app)
        .put(`${apiEndPoint}/${userId}`)
        .send(updatedUser);

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });

    // Add more test cases for input validation, error scenarios, etc.
  });

  // describe('DELETE /api/users/:id', () => {
  //   it('should delete an existing user', async () => {
  //     const userId = "64a7fca27784b6041701ed73";

  //     const response = await request(app).delete(`${apiEndpoint}/${userId}`);

  //     expect(response.status).toBe(200);
  //     expect(response.body.success).toBe(true);
  //   });

  //   it('should return a 404 error if the user ID does not exist', async () => {
  //     const userId = 999;

  //     const response = await request(app).delete(`/api/user/${userId}`);

  //     expect(response.status).toBe(404);
  //     expect(response.body.success).toBe(true);
  //   });

  //   // Add more test cases for error scenarios, etc.
  // });
});
