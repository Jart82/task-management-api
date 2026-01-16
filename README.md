<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center">Task Management API</h1>

<p align="center">
  <strong>A robust RESTful API for managing tasks and users</strong>
  <br />
  Built with <a href="https://nestjs.com/" target="_blank">NestJS</a> • <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> • <a href="https://typeorm.io/" target="_blank">TypeORM</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg" alt="Node Version" />
  <img src="https://img.shields.io/badge/npm-%3E%3D9-brightgreen.svg" alt="NPM Version" />
  <img src="https://img.shields.io/badge/license-UNLICENSED-blue.svg" alt="License" />
  <img src="https://img.shields.io/badge/nestjs-v11-ea2039.svg" alt="NestJS Version" />
</p>

---

## 📋 Description

Task Management API is a comprehensive RESTful API built with NestJS that provides functionality for managing users and their tasks. The application features robust user authentication validation, task creation and management, and is designed for scalability and maintainability.

### Key Features

- ✅ User management with CRUD operations
- ✅ Input validation with class-validator
- ✅ TypeScript for type safety
- ✅ TypeORM for database operations
- ✅ Unit and E2E testing with Jest
- ✅ ESLint and Prettier for code quality
- ✅ RESTful API design principles

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Jart82/task-management-api.git
cd task-management-api
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (create a `.env` file):

```bash
PORT=3000
NODE_ENV=development
```

### Running the Application

```bash
# development mode with watch
npm run start:dev

# production mode
npm run start:prod

# simple start
npm run start
```

The API will be available at `http://localhost:3000`

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run e2e tests
npm run test:e2e

# Generate coverage report
npm run test:cov
```

## 📁 Project Structure

```
src/
├── app.controller.ts       # Main controller
├── app.service.ts          # Main service
├── app.module.ts           # Root module
├── main.ts                 # Application entry point
└── users/
    ├── users.controller.ts # Users endpoints
    ├── users.service.ts    # Users business logic
    ├── users.module.ts     # Users module
    ├── dto/
    │   ├── create-user.dto.ts
    │   └── update-user.dto.ts
    └── entities/
        └── user.entity.ts
```

## 🔌 API Endpoints

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users |
| POST | `/users` | Create a new user |
| GET | `/users/:id` | Get user by ID |
| PATCH | `/users/:id` | Update user |
| DELETE | `/users/:id` | Delete user |

### Request Examples

**Create User**

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "SecurePass123"
  }'
```

## 📊 Data Models

### User Entity

```typescript
{
  id: UUID
  firstName: string (min 2 chars)
  lastName: string (min 2 chars)
  email: string (unique, valid email)
  password: string (min 8 chars, uppercase, lowercase, number)
}
```

## 🛠️ Development

### Code Quality

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

### Build the Project

```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is UNLICENSED

## 📖 Documentation

For more information about NestJS, visit the [official documentation](https://docs.nestjs.com)

## 👤 Author

- **GitHub**: [@Jart82](https://github.com/Jart82)

## 📞 Support

For issues and questions, please open an issue on the [GitHub repository](https://github.com/Jart82/task-management-api/issues)

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
