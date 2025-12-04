# Run Project Locally

This document explains how to start the wardrobe-moment monorepo locally (frontend + backend).

Prerequisites
- Node.js 18+ (or the version defined in the repo, if any)
- pnpm (recommended). You can enable via Corepack:

  corepack enable && corepack prepare pnpm@latest --activate

- Git (to clone the repo)

Quick start
1. Clone the repo (if you haven't):

   git clone <repo-url>
   cd wardrobe-moment

2. Install workspace dependencies (run from repository root):

   pnpm install

   This installs dependencies for the whole pnpm workspace (packages/frontend and packages/backend).

3. Start both frontend and backend (recommended)

   From the repository root run:

   pnpm run dev

   This workspace script will start both the backend and frontend dev servers concurrently (see `package.json` scripts for details). Use this command to run the full app locally in one terminal.

4. Start services individually (fallback)

   If you prefer to run each service in its own terminal, or `pnpm run dev` is not available, use these steps:

   Backend
   --------
   Open a terminal and run:

   cd packages/backend
   # If the project provides an example env file, copy it (if present):
   # cp .env.example .env
   pnpm install
   pnpm run dev

   Frontend
   --------
   Open a second terminal and run:

   cd packages/frontend
   pnpm install
   pnpm run dev

   The frontend uses Vite by default; after the dev server starts you should see a local URL (usually http://localhost:5173).


