<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center">Task Management API</h1>

<p align="center">
  <strong>A professional-grade RESTful API for managing tasks and users with JWT authentication</strong>
  <br />
  Built with <a href="https://nestjs.com/" target="_blank">NestJS</a> • <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> • <a href="https://typeorm.io/" target="_blank">TypeORM</a> • <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg" alt="Node Version" />
  <img src="https://img.shields.io/badge/npm-%3E%3D9-brightgreen.svg" alt="NPM Version" />
  <img src="https://img.shields.io/badge/license-UNLICENSED-blue.svg" alt="License" />
  <img src="https://img.shields.io/badge/nestjs-v11-ea2039.svg" alt="NestJS Version" />
</p>

---

## 📋 Overview

Task Management API is a production-ready RESTful API built with NestJS that provides comprehensive functionality for user authentication, user management, and task lifecycle management. The application implements industry-standard practices including JWT-based authentication, comprehensive input validation, and secure password hashing.

### ✨ Key Features

- **User Authentication**: Secure JWT-based authentication with bcrypt password hashing
- **User Management**: Registration, login, and user profile management
- **Task Management**: Create, read, update, and delete tasks with filtering capabilities
- **Input Validation**: Comprehensive data validation using class-validator
- **Type Safety**: Full TypeScript implementation with strict typing
- **Database**: PostgreSQL with TypeORM for robust data persistence
- **Error Handling**: Global exception filters with detailed error responses
- **Testing**: Unit and E2E tests with Jest framework
- **Code Quality**: ESLint and Prettier for consistent code formatting
- **API Security**: Password field exclusion from responses, JWT token validation

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| NestJS | Backend Framework | ^11.0.1 |
| TypeScript | Type-Safe Language | ^5.3.3 |
| TypeORM | ORM | ^0.3.20 |
| PostgreSQL | Database | Latest |
| JWT | Authentication | ^11.0.2 |
| Bcrypt | Password Hashing | ^5.1.1 |
| Jest | Testing | ^29.7.0 |

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=task_management

# JWT Configuration
JWT_SECRET=your-super-secret-key
JWT_EXPIRATION=1d
```

### 4. Run the Application

```bash
# Development mode with auto-reload
npm run start:dev

# Production mode
npm run build
npm run start:prod

# Basic start
npm run start
```

The API will be available at `http://localhost:3000`

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "SecurePass123@"
}
```

**Response (201 Created):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "createdAt": "2026-01-21T07:52:16.414Z",
  "updatedAt": "2026-01-21T07:52:16.414Z"
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123@"
}
```

**Response (200 OK):**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "createdAt": "2026-01-21T07:52:16.414Z",
    "updatedAt": "2026-01-21T07:52:16.414Z"
  }
}
```

### User Endpoints

#### Get User Profile
```http
GET /users/me
Authorization: Bearer {access_token}
```

**Response (200 OK):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "createdAt": "2026-01-21T07:52:16.414Z",
  "updatedAt": "2026-01-21T07:52:16.414Z"
}
```

### Task Endpoints

#### Create Task
```http
POST /tasks
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "title": "Complete Project",
  "description": "Finish the API development",
  "dueDate": "2026-12-31"
}
```

**Response (201 Created):**
```json
{
  "id": "660e8400-e29b-41d4-a716-446655440001",
  "title": "Complete Project",
  "description": "Finish the API development",
  "completed": false,
  "dueDate": "2026-12-31",
  "ownerId": "550e8400-e29b-41d4-a716-446655440000",
  "createdAt": "2026-01-21T08:00:00.000Z",
  "updatedAt": "2026-01-21T08:00:00.000Z"
}
```

#### Get All Tasks
```http
GET /tasks
Authorization: Bearer {access_token}
```

**Response (200 OK):**
```json
[
  {
    "id": "660e8400-e29b-41d4-a716-446655440001",
    "title": "Complete Project",
    "description": "Finish the API development",
    "completed": false,
    "dueDate": "2026-12-31",
    "ownerId": "550e8400-e29b-41d4-a716-446655440000",
    "createdAt": "2026-01-21T08:00:00.000Z",
    "updatedAt": "2026-01-21T08:00:00.000Z"
  }
]
```

#### Update Task
```http
PATCH /tasks/{taskId}
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "title": "Updated Title",
  "completed": true
}
```

#### Delete Task
```http
DELETE /tasks/{taskId}
Authorization: Bearer {access_token}
```

## 🧪 Testing

```bash
# Run all unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run end-to-end tests
npm run test:e2e

# Generate coverage report
npm run test:cov
```

## 📁 Project Structure

```
task-management-api/
├── src/
│   ├── auth/                    # Authentication module
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── dto/
│   │   │   ├── login-user.dto.ts
│   │   │   └── register-user.dto.ts
│   │   ├── guards/
│   │   │   └── jwt-auth.guard.ts
│   │   ├── strategies/
│   │   │   └── jwt.strategy.ts
│   │   └── entities/
│   │       └── auth.entity.ts
│   ├── users/                   # Users module
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.module.ts
│   │   ├── dto/
│   │   │   ├── register-user.dto.ts
│   │   │   └── user-response.dto.ts
│   │   └── entities/
│   │       └── user.entity.ts
│   ├── tasks/                   # Tasks module
│   │   ├── tasks.controller.ts
│   │   ├── tasks.service.ts
│   │   ├── tasks.module.ts
│   │   ├── dto/
│   │   │   ├── create-task.dto.ts
│   │   │   ├── get-tasks-query.dto.ts
│   │   │   ├── task-response.dto.ts
│   │   │   └── update-task.dto.ts
│   │   └── entities/
│   │       └── task.entity.ts
│   ├── common/                  # Common utilities
│   │   └── filters/
│   │       └── http-exception.filter.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── app.module.ts
│   └── main.ts
├── test/                        # E2E tests
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt with salt rounds for secure password storage
- **Input Validation**: Comprehensive validation using class-validator decorators
- **HTTP Exception Filter**: Global error handling with sanitized responses
- **Field Exclusion**: Automatic password field exclusion from API responses
- **CORS Protection**: Ready for CORS configuration
- **SQL Injection Prevention**: TypeORM parameterized queries

## 📊 Data Models

### User Entity
```typescript
{
  id: UUID (primary key)
  firstName: string (2-50 characters)
  lastName: string (2-50 characters)
  email: string (unique, valid email format)
  password: string (min 8, uppercase, lowercase, number, special char)
  createdAt: Date (auto-generated)
  updatedAt: Date (auto-generated)
}
```

### Task Entity
```typescript
{
  id: UUID (primary key)
  title: string (max 100 characters)
  description: string (optional, max 500 characters)
  completed: boolean (default: false)
  dueDate: Date (optional)
  ownerId: UUID (foreign key to User)
  createdAt: Date (auto-generated)
  updatedAt: Date (auto-generated)
}
```

## 🛠️ Development

### Code Formatting and Linting

```bash
# Format code with Prettier
npm run format

# Run ESLint and fix issues
npm run lint
```

### Build for Production

```bash
npm run build
```

The compiled files will be in the `dist/` directory.

## 🐛 Error Handling

The API returns standardized error responses:

```json
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "Email already registered",
  "timestamp": "2026-01-21T07:52:29.780Z",
  "path": "/auth/register"
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is UNLICENSED.

## 📖 Useful Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [TypeORM Documentation](https://typeorm.io/)
- [JWT.io](https://jwt.io/)
- [class-validator](https://github.com/typestack/class-validator)
- [Bcrypt Documentation](https://www.npmjs.com/package/bcrypt)

## 👨‍💼 Support

For support, please open an issue on the repository or contact the development team.

---

<p align="center">
  Made with ❤️ using NestJS
</p>

- **GitHub**: [@Jart82](https://github.com/Jart82)

## 📞 Support

For issues and questions, please open an issue on the [GitHub repository](https://github.com/Jart82/task-management-api/issues)

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
