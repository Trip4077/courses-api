module.exports = {
  development: {
    client: "sqlite3",
    connection: { filename: "./data/bases/programs.sqlite3" },
    useNullAsDefault: true,
    migrations: { directory: "./data/migrations" },
    seeds: { directory: "./data/seeds" }
  },

  testing: {
    client: "sqlite3",
    connection: { filename: "./data/bases/test_programs.sqlite3" },
    useNullAsDefault: true,
    migrations: { directory: "./data/migrations" },
    seeds: { directory: "./data/seeds" }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: { directory: "./data/migrations" },
    seeds: { directory: "./data/seeds" }
  }
};