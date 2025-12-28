const { Pool } = require("pg");
const dotenv = require("dotenv");

const envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env";
dotenv.config({ path: envFile });

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL:', process.env.DB_NAME);
});

module.exports = pool;
