# Duolingo Clone

This project is a Duolingo-inspired language learning application built using modern web technologies. It replicates core features of Duolingo, including lessons, user authentication, and subscription payments.

## 🚀 Technologies Used

- **Next.js** – React framework for full-stack web development
- **Clerk** – Authentication and user management
- **Stripe** – Payment processing and subscriptions
- **Drizzle** – ORM for type-safe database access
- **NeonDB/Serverless** – Serverless PostgreSQL database

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL database
- Stripe account
- Clerk account

### Environment Variables

Create a `.env` file in the root directory with the following keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

DATABASE_URL=your_postgresql_connection_url

STRIPE_API_KEY=your_stripe_api_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Installation

```bash
git clone https://github.com/DimitarMitev92/duolingo-clone.git
cd duolingo-clone
npm install
```

### Running the App

```bash
npm run db:seed
npm run dev
```

### Visiting the App

You can now access the app at [http://localhost:3000](http://localhost:3000).

### Licensing

This project is released under the [MIT License](LICENSE).
