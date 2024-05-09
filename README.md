# User Authentication System with JSON Web Tokens (JWT)


This project implements a user authentication system using JSON Web Tokens (JWT) in a Node.js Express application with SQL database integration. Additionally, it includes a secure logout mechanism that invalidates issued tokens.

### Features
- User Registration: Allows users to register with a unique username and a securely hashed password.
- User Login: Validates user credentials and issues a JWT upon successful authentication.
- Protected Routes: Access to protected routes (e.g., /main) requires a valid JWT token.
- Logout Endpoint: Implements a /logout endpoint to revoke the issued token and log the user out securely.

## Getting Started

### Installation
1. Clone the repository:
    git clone https://github.com/your-username/your-repo.git
2. Navigate to the project directory:
    cd jwt
3. Set up environment variables:
- Create a .env file in the root directory.
- Add the following environment variables:-
- **DB_HOST**=localhost
- **DB_USER**=your_database_username
- **DB_PASSWORD**=your_database_password
- **DB_NAME**=your_database_name
- **JWT_SECRET**=your_jwt_secret

3. Navigate to the `/` directory in your terminal:

   ```bash
   npm install
   npm run dev
4. Navigate to the `/frontend` directory in your terminal:
    ```bash
    npm install
    npm run dev

## Implementation Details

- **Authentication**: JWT-based authentication is implemented using the jsonwebtoken library.
- **Database**: MySQL database is used for storing user credentials securely.
- **Password** Hashing: User passwords are hashed using bcrypt for enhanced security.
- **Token Expiration**: JWT tokens have an expiration time to enhance security.
- **Logout Mechanism**: The /logout endpoint revokes the issued token and logs the user out securely. 


## Challenges Faced

- Implementing secure token management and validation.
- Designing an efficient user registration and login flow.
- Integrating JWT authentication with protected routes.

## Security Measures

- Used bcrypt for password hashing to prevent plaintext storage.
- Implemented token expiration to limit token lifespan.
- Stored sensitive information (e.g., JWT secret) in environment variables.
- Implemented token invalidation on logout.

[![Before-login.png](https://i.postimg.cc/kXLHCNz4/Before-login.png)](https://postimg.cc/N57D7Xgq)
[![After-login.png](https://i.postimg.cc/43Q2pDd7/After-login.png)](https://postimg.cc/hJh0B3Vc)