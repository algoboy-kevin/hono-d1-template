# Hono D1 Template

This repository contains a Hono project that utilizes Cloudflare Workers and D1. Below are the instructions on how to set up and run the project.

### Setting up the Environment

1. Ensure that you have Node.js installed on your machine.
2. Clone this repository to your local machine.
3. Run `npm install` to install the project dependencies.

### Database Setup and Migrations

Before running the project, you need to set up the database and perform the necessary migrations. Make sure to replace `<DATABASE_NAME>` with your actual database name. Update the `database_id` field in `wrangler.toml` with the correct database name.

1. Create the database:
   ```
   npm run db:create <DATABASE_NAME>
   ```
2. Create a new migration:
   ```
   npm run migrate:init
   ```
3. Apply the migration:
   ```
   npm run migrate:apply <DATABASE_NAME>
   ```

### Running the Project

To run the project locally, use the following command:
```
npm run dev
```

This will create an instance of the project running at port 8787. You can access the Swagger documentation at [http://localhost:8787/v1/doc](http://localhost:8787/v1/doc).

### Additional Commands
- To create the database:
  ```
  npm run db:delete <DATABASE_NAME>
  ```
- To delete the database:
  ```
  npm run db:delete <DATABASE_NAME>
  ```
- To create a new migration:
  ```
  npm run migrate:create <DATABASE_NAME> <MIGRATION_NAME>
  ```
- To write schema modifications into the newly created migration file:
  ```
  npm run migrate:fill <DATABASE_NAME>
  ```
- To execute migration files:
  ```
  npm run migrate:execute <DATABASE_NAME> (use flags --remote or --local if necessary)
  ```
- To generate Prisma client:
  ```
  npm run prisma:generate
  ```

### Notes

- Ensure that your database and migrations are up to date as you make changes to the codebase.
- Update any environmental variables or configurations as needed in `wrangler.toml`.
- The `package.json` file contains all the necessary scripts and dependencies for the project.
- Do not include any database ID or secret key in `wrangler.toml`; only add the key before deployment.

If you have any questions or issues, feel free to open an [issue](https://github.com/algoboy-kevin/hono-d1-template/issues) in this repository. Thank you for using our project!