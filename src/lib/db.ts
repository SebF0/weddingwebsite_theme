/**
 * Singleton Postgres client using the `postgres` npm package.
 *
 * Uses DATABASE_URL from environment variables.
 * max: 1 keeps connection counts low in serverless/edge environments
 * where each function invocation is short-lived.
 *
 * The global cache prevents duplicate clients during Next.js dev hot-reloads.
 */

import postgres from "postgres";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error(
    "Missing DATABASE_URL. Add it to .env.local before starting the server."
  );
}

declare global {
  // eslint-disable-next-line no-var
  var _sql: postgres.Sql | undefined;
}

function createClient(): postgres.Sql {
  return postgres(DATABASE_URL as string, {
    max: 1,
    ssl: "require",
    idle_timeout: 20,
    connect_timeout: 10,
  });
}

const sql: postgres.Sql =
  process.env.NODE_ENV === "production"
    ? createClient()
    : (globalThis._sql ??= createClient());

export default sql;
