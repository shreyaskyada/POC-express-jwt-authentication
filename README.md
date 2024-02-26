# Express JWT Authentication POC with Typescript

This proof of concept (POC) demonstrates the authentication flow using REST APIs with both access tokens and refresh tokens.

## Overview

This project showcases how to implement JWT-based authentication in a Node.js Express application. It includes endpoints for user registration, login, token generation (both access and refresh tokens), and protected routes that require authentication.

## Endpoints

1. **Login**: `POST /auth/login`

   - Description: Login and generate access and refresh tokens based on the user name.
   - Example Request:

     ```http
     POST /auth/login
     Content-Type: application/json

     {
       "username": "your_username"
     }
     ```

2. **Regenerate Token**: `POST /auth/token`

   - Description: Pass the refresh token and get the new access token.
   - Example Request:

     ```http
     POST /auth/token
     Content-Type: application/json

     {
       "refreshToken": "your_refresh_token"
     }
     ```

3. **Logout**: `DELETE /auth/logout`

   - Description: Remove the refresh tokens.
   - Example Request:
     ```http
     DELETE /auth/logout
     Authorization: Bearer your_access_token
     ```

4. **Get Todos**: `GET /todos`
   - Description: Protected route that requires authentication.
   - Example Request:
     ```http
     GET /todos
     Authorization: Bearer your_access_token
     ```

## Usage

To interact with the APIs, open the `requests.rest` file. Make sure that you have installed REST client in extension install in your vs code.
