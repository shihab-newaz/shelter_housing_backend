# Shelter Housing Admin Api

A NestJS-based REST API for managing real estate projects. This application provides authentication and project management functionalities with MySQL database support via Railway.

## Features

- Admin Authentication (JWT-based)
- Project Management (CRUD operations)
- MySQL Database Integration
- Swagger API Documentation
- Environment Configuration
- TypeORM Integration

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MySQL (via Railway)
- Git

## Environment Setup

1. Create a `.env` file in the root directory:
```env
DATABASE_URL=mysql://[USERNAME]:[PASSWORD]@[HOST]:3306/[DATABASE_NAME]?ssl={"rejectUnauthorized":false}
JWT_SECRET=your-super-secret-jwt-key
```

2. Configure Railway:
   - Create a Railway account
   - Set up a new MySQL database
   - Add environment variables in Railway dashboard

## Installation

```bash
# Install dependencies
$ npm install

# Development
$ npm run start

# Watch mode
$ npm run start:dev

# Production mode
$ npm run start:prod
```

## API Documentation

Once the application is running, visit:
```
http://localhost:8000/api
```
This will open the Swagger UI with complete API documentation.

## Database Migrations

```bash
# Generate a migration
$ npm run typeorm:generate-migration

# Run migrations
$ npm run typeorm:run-migrations
```

## Project Structure

```
src/
├── auth/                  # Authentication module
│   ├── controllers/
│   ├── dto/
│   ├── entities/
│   ├── guards/
│   └── services/
├── projects/             # Projects module
│   ├── controllers/
│   ├── dto/
│   ├── entities/
│   └── services/
├── config/              # Configuration files
├── app.module.ts        # Main application module
└── main.ts             # Application entry point
```

## API Endpoints

### Authentication
- POST /auth/login - Admin login

### Projects
- GET /projects - Get all projects
- POST /projects - Create a new project
- PUT /projects/:id - Update a project
- DELETE /projects/:id - Delete a project

## Deployment

This project is configured for deployment on Railway:

1. Push your code to GitHub
2. Connect your GitHub repository to Railway
3. Configure environment variables in Railway dashboard
4. Deploy!

## Development

```bash
# Run tests
$ npm run test

# Run e2e tests
$ npm run test:e2e

# Generate test coverage
$ npm run test:cov
```

## Security

- JWT authentication
- Password hashing with bcrypt
- Environment variable protection
- SSL/TLS database connection

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is [MIT licensed](LICENSE).