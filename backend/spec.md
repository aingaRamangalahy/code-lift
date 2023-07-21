# Codelift Backend API Specification

## Overview

Codelift is a website that aims to help individuals learn coding by sharing learning resources such as tutorials, articles, videos, and more. This document outlines the specifications for the backend API of the Codelift website, which will be built using Node.js.

## Authentication

The API will support user authentication using JWT (JSON Web Tokens). Users will be able to register, login, and logout from the website. Certain endpoints will require authentication to access, such as creating, updating, or deleting resources.

## Endpoints

### Auth Endpoints

1. `POST /api/auth/register`

    - Description: Register a new user.
    - Request Body:
        - `username` (string, required): The username of the user.
        - `email` (string, required): The email of the user.
        - `password` (string, required): The password of the user.
    - Response: Returns the registered user details.

2. `POST /api/auth/login`

    - Description: Authenticate a user and generate a JWT token.
    - Request Body:
        - `email` (string, required): The email of the user.
        - `password` (string, required): The password of the user.
    - Response: Returns the user details along with a JWT token.

3. `POST /api/auth/register/google`

    - Description: Register a new user with a Gmail account.
    - Request Body:
        - googleToken (string, required): The Google OAuth token obtained after user authentication.
    - Response: Returns the registered user details.

4. `POST /api/auth/register/github`

    - Description: Register a new user with a GitHub account.
    - Request Body:
        - githubToken (string, required): The GitHub OAuth token obtained after user authentication.
    - Response: Returns the registered user details.

5. `POST /api/auth/forgotpassword`

    - Description: Initiate the password reset process for a user.
    - Request Body:
        - email (string, required): The email of the user for password reset.
    - Response: Returns a success message indicating that the password reset process has been initiated.

6. `POST /api/auth/resetpassword/:resetToken`

    - Description: Reset the user's password using the reset token.
    - Request Parameters:
        - resetToken (string, required): The unique token sent to the user's email for password reset.
          -Request Body:
        - password (string, required): The new password to set for the user.
    - Response: Returns a success message indicating that the password has been reset.

### User Endpoints

1. `GET /api/users`
   - Description: Get all users.
   - Authorization: Required (JWT token, Admin role).
   - Response: Returns an array of all user details.

2. `GET /api/users/:id`
   - Description: Get a user by user ID.
   - Request Parameters:
     - `id` (string, required): The ID of the user.
   - Authorization: Required (JWT token, Admin role or same user).
   - Response: Returns the user details.

3. `PUT /api/users/:id`
   - Description: Update an existing user by user ID.
   - Request Parameters:
     - `id` (string, required): The ID of the user.
   - Request Body:
     - `name` (string, required): The updated name of the user.
     - `email` (string, required): The updated email address of the user.
   - Authorization: Required (JWT token, Admin role or same user).
   - Response: Returns the updated user details.

4. `DELETE /api/users/:id`
   - Description: Delete a user by user ID.
   - Request Parameters:
     - `id` (string, required): The ID of the user.
   - Authorization: Required (JWT token, Admin role or same user).
   - Response: Returns a success message upon successful deletion.

5. `GET /api/users/me`
    - Description: Get user details by user ID.
    - Request Parameters:
        - `id` (string, required): The ID of the user.
    - Response: Returns the user details.
### Resource Endpoints

1. `POST /api/resources`

    - Description: Create a new learning resource.
    - Request Body:
        - `title` (string, required): The title of the resource.
        - `description` (string): A brief description of the resource.
        - `url` (string, required): The URL of the resource.
        - `type` (string, required): The type of the resource (e.g., video, article, tutorial).
        - `difficulty` (string, required): The difficulty level of the resource (e.g., beginner, intermediate, advanced).
        - `vote` (number): number of vote for the resource
        - `topics`(list): list of techo on the article
        - `categories`(list): list of categories on the article
    - Authorization: Required (JWT token).
    - Response: Returns the created resource details.

2. `GET /api/resources`

    - Description: Get all learning resources.
    - Response: Returns an array of all resources.

3. `GET /api/resources/:id`

    - Description: Get a learning resource by resource ID.
    - Request Parameters:
        - `id` (string, required): The ID of the resource.
    - Response: Returns the resource details.

4. `PUT /api/resources/:id`

    - Description: Update an existing learning resource by resource ID.
    - Request Parameters:
        - `id` (string, required): The ID of the resource.
    - Request Body: (Same as the create resource endpoint)
    - Authorization: Required (JWT token).
    - Response: Returns the updated resource details.

5. `DELETE /api/resources/:id`
    - Description: Delete a learning resource by resource ID.
    - Request Parameters:
        - `id` (string, required): The ID of the resource.
    - Authorization: Required (JWT token).
    - Response: Returns a success message upon successful deletion.


## Categories Endpoint
1. `POST /api/categories`
   - Description: Create a new category.
   - Request Body:
     - `name` (string, required): The name of the category.
   - Authorization: Required (JWT token).
   - Response: Returns the created category details.

2. `GET /api/categories`
   - Description: Get all categories.
   - Response: Returns an array of all categories.

3. `GET /api/categories/:id`
   - Description: Get a category by category ID.
   - Request Parameters:
     - `id` (string, required): The ID of the category.
   - Response: Returns the category details.

4. `PUT /api/categories/:id`
   - Description: Update an existing category by category ID.
   - Request Parameters:
     - `id` (string, required): The ID of the category.
   - Request Body: 
     - `name` (string, required): The updated name of the category.
   - Authorization: Required (JWT token).
   - Response: Returns the updated category details.

5. `DELETE /api/categories/:id`
   - Description: Delete a category by category ID.
   - Request Parameters:
     - `id` (string, required): The ID of the category.
   - Authorization: Required (JWT token).
   - Response: Returns a success message upon successful deletion.


## Topic Endpoint

1. `POST /api/topics`
   - Description: Create a new topic.
   - Request Body:
     - `name` (string, required): The name of the topic.
   - Authorization: Required (JWT token).
   - Response: Returns the created topic details.

2. `GET /api/topics`
   - Description: Get all topics.
   - Response: Returns an array of all topics.

3. `GET /api/topics/:id`
   - Description: Get a topic by topic ID.
   - Request Parameters:
     - `id` (string, required): The ID of the topic.
   - Response: Returns the topic details.

4. `PUT /api/topics/:id`
   - Description: Update an existing topic by topic ID.
   - Request Parameters:
     - `id` (string, required): The ID of the topic.
   - Request Body: 
     - `name` (string, required): The updated name of the topic.
   - Authorization: Required (JWT token).
   - Response: Returns the updated topic details.

5. `DELETE /api/topics/:id`
   - Description: Delete a topic by topic ID.
   - Request Parameters:
     - `id` (string, required): The ID of the topic.
   - Authorization: Required (JWT token).
   - Response: Returns a success message upon successful deletion.

## Error Handling

The API should handle various error scenarios and provide appropriate error responses with status codes and error messages.

## Security

The API should implement security measures to prevent unauthorized access, protect user data, and prevent common security vulnerabilities like SQL injection, XSS, etc.

## Testing

The API should be thoroughly tested using unit tests and integration tests to ensure its functionality and reliability.

## Deployment

The API should be deployed on a server with appropriate infrastructure to handle traffic efficiently.

## Documentation

The API should be well-documented with detailed explanations of each endpoint, request parameters, request bodies, and responses. API documentation will help developers understand how to use the API effectively.

---

This specification outlines the basic structure and endpoints for the Codelift backend API. Additional features and functionalities can be added based on specific requirements and project scope.
