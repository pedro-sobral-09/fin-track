# MVP

## Project Description

Full-stack personal finance management application built to practice backend architecture, REST API design, authentication, database modeling, and modern web development.

## Tech Stack
- Backend: Node.js + Express
- Database: PostgreSQL + Prisma
- Frontend: React + Tailwind

## Features

- Authentication (user sign-up/login)
- Account CRUD
- Category CRUD
- Transaction CRUD (expense/income)
- Transaction listing with filters by account and category
- User dashboard

## Future Features

- Credit cards (own transaction logic)
- Google login
- CSV, PDF, and spreadsheet upload, with AI-based reading to extract transactions into structured format (JSON) and import them directly into the database — especially useful for handling bills/statements in varied formats
- Category icons
- AI-powered financial suggestions
- Stock tracking via brapi API and stock alerts
- Cached/stored balance on the account (performance optimization, only if needed)
- Internationalization (i18n) — support for multiple languages (PT-BR and EN), with a user-facing language switcher

## Business Rules

### Authentication

- Two users cannot have the same email.

### Accounts

- An account must belong to a user.
- An account cannot have a negative balance.
- Deleting an account is only allowed if it has no transactions.

### Categories

- A category must belong to a user.
- A category name must be unique per user.

### Transactions

- A transaction must belong to an account and a category.
- A transaction must be of type `income` or `expense`.
- A transaction amount must be greater than zero.
- A transaction must have a valid date.
- An expense cannot exceed the account balance.
- Updating or deleting a transaction must keep the account balance consistent.

### Authorization

- Users can only access their own accounts, categories, and transactions.

## Data Model

### User
- id (PK) — UUID, NOT NULL
- name — NOT NULL
- email — NOT NULL, UNIQUE
- passwordHash — NOT NULL
- createdAt — NOT NULL, DEFAULT now()
- updatedAt — NOT NULL, DEFAULT now()
- deletedAt — optional

### Account
- id (PK) — UUID, NOT NULL
- userId (FK) — NOT NULL, references User(id)
- name — NOT NULL

### Category
- id (PK) — UUID, NOT NULL
- userId (FK) — NOT NULL, references User(id)
- name — NOT NULL
- type — NOT NULL ENUM { income / expense }

### Transactions
- id (PK) — UUID, NOT NULL
- userId (FK) — NOT NULL, references User(id)
- accountId (FK) — NOT NULL, references Account(id)
- categoryId (FK) — NOT NULL, references Category(id)
- description — NOT NULL
- amount — NOT NULL, numeric(12,2)
- transactionDate — NOT NULL
- type — NOT NULL ENUM { income / expense }
- createdAt — NOT NULL, DEFAULT now()
- updatedAt — NOT NULL, DEFAULT now()
- deletedAt — optional

## Diagram

ER diagram generated on dbdesign.io, based on the model above: `docs/assets/der.png`

## User Flow

1. User arrives at the landing page
2. Logs in or signs up
3. Creates an account
4. Creates a category (some come pre-defined by default)
5. Records a transaction, linked to an account and a category
6. Views the updated balance