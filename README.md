# FinTrack

Personal finance management application, currently in development.

- `backend/`: REST API built with Node.js, Express, and PostgreSQL (Prisma).
- `frontend/`: React + Vite web application.

This is a personal portfolio project built to practice backend architecture, REST API design, authentication, database modeling, and full-stack development.

## Requirements

- Node.js
- PostgreSQL
- npm

## Running locally

### 1. Start the backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with:

```
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/fintrack
JWT_SECRET=your_secret_key
```

Run the migrations and start the server:

```bash
npx prisma migrate dev
npm run dev
```

The API is available at `http://localhost:3000`.

### 2. Start the frontend

In another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/` with:

```
VITE_URL=http://localhost:3000
```

```bash
npm run dev
```

## Useful commands

Backend commands, run in `backend/`:

```bash
npm run dev
npm start
npm test
```

Frontend commands, run in `frontend/`:

```bash
npm run dev
npm run build
npm run preview
```

## Architecture

The backend follows a controller-service-repository pattern per module (`auth`, `user`, `category`, and soon `transactions`).

```
backend/src/modules/
├── auth/
├── user/
└── category/
```

## Data model

```
User 1 -- N Account
User 1 -- N Category
User 1 -- N Transactions
Account 1 -- N Transactions
Category 1 -- N Transactions
```

Full ER diagram in `docs/assets/der.png`.

## Features

Done:

- [x] User authentication (register/login with JWT)
- [x] User CRUD
- [x] Category CRUD

To do:

- [ ] Transaction CRUD (income/expense)
- [ ] Account balance calculation
- [ ] Frontend dashboard (React + Tailwind)
- [ ] Credit cards with their own billing logic
- [ ] Google login
- [ ] CSV/PDF statement upload with AI-based transaction extraction
- [ ] AI-powered financial suggestions
- [ ] Stock tracking via brapi API and stock alerts

## Author

Pedro Sobral
