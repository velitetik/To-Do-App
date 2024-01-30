## To-do App

- **Description:**

  - This app serves as a demo showcasing a To-do application.

- **Tech Stack:**

  - Developed using SvelteKit, PostgreSQL, Docker, Prisma, TypeScript, and Node.js.

- **Setup:**

  - Clone the repository.
  - Open it in a container environment.
  - Run `npm install` to install the required Node.js modules and files.
  - For DB-Connection in `.env` put this: `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres:latest?schema=public"`
  - Execute `npm run dev` to start the app.

- **Features:**

  - Add, delete, and mark tasks with checkboxes.
  - Enjoy a fully functional To-do app.

- **Note:**
  - PostgreSQL is automatically configured by the devcontainer extension, though it may be considered overkill for a small app.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

![To-do](https://github.com/velitetik/To-Do-App/assets/113057734/5ff2daaf-db6d-43a7-8ad3-b4f561a017d0)
