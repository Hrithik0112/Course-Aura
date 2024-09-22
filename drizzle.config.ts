import { defineConfig } from 'drizzle-kit'

// const dbUrl = process.env.NEXT_PUBLIC_DB_CONNECTION_STRING

// if (!dbUrl) {
//   throw new Error('Database connection string is not defined')
// }

export default defineConfig({
  schema: "./src/configs/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING as string,
  },
  verbose: true,
  strict: true,
})