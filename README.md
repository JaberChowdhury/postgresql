# SQL Training API

An industry-grade, blazing-fast REST API built to learn PostgreSQL, structured with modern enterprise patterns.

## 🚀 Tech Stack

- **Runtime:** [Bun](https://bun.sh/)
- **Framework:** [Hono](https://hono.dev/)
- **Database:** PostgreSQL (via `postgres.js`)
- **Validation:** [Zod](https://zod.dev/)

## 🏗️ Architecture

This project strictly follows the **Controller-Service-Repository** pattern to ensure separation of concerns and maintainability:

- **Routes (Controllers):** `src/routes/` - Handles HTTP requests, HTTP responses, and routing. Uses Zod for strict payload validation.
- **Services:** `src/services/` - Contains the core business logic. Calls repositories to fetch/save data.
- **Repositories:** `src/repositories/` - The Data Access Layer. All raw SQL queries live here.
- **Schemas:** `src/schemas/` - Zod schemas defining the shape and constraints of your data.
- **Middlewares:** `src/middlewares/` - Global cross-cutting concerns (Error handling, CORS, Logging).

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
bun install
```

### 2. Configure Database
Ensure you have a PostgreSQL database running locally and accessible via the default environment variables, or update the connection string in `src/db/index.ts` if needed. By default, it connects to the `myfirstdb` database.

### 3. Run the Development Server
```bash
bun dev
```
The server will start at `http://localhost:3000` and will automatically restart when you change code. The database tables will be initialized automatically.

## 🧪 Testing

### Automated Tests
Run the built-in Bun test suite to verify the CRUD operations:
```bash
bun test
```

### Manual Testing with Bruno
This project includes a collection for [Bruno](https://www.usebruno.com/), an open-source API client.
1. Open Bruno.
2. Select **Open Collection** and point it to the `postgresql_test` directory in this project.
3. You can use the included `Reset Database` request in the `seed` folder to wipe your DB and populate it with dummy data at any time.

## 📦 Build for Production

Compile the project into a standalone JavaScript file:
```bash
bun run build
```

Run the compiled production build:
```bash
bun run start
```

## 📖 API Endpoints

### 🎓 Students
- `GET /students` - Retrieve all students
- `GET /students/:id` - Retrieve a specific student
- `POST /students` - Create a new student
- `PUT /students/:id` - Update a student
- `DELETE /students/:id` - Delete a student

### 💸 Expenses
- `GET /expenses` - Retrieve all expenses
- `POST /expenses` - Create a new expense

### ⚙️ System
- `POST /seed` - Drops existing tables, recreates them, and seeds 5 dummy entries for both students and expenses.
# postgresql
