const mysql = require('mysql2/promise');

// Create reusable database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: 'webdev_learning',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function executeQuery(sql, params = []) {
  const [results] = await pool.execute(sql, params);
  return results;
}

module.exports = { pool, executeQuery };


<!-- Updated: 2026-08-11T17:15:06+05:30 [Commit #503] -->


<!-- Updated: 2026-08-12T09:14:45+05:30 [Commit #507] -->


<!-- Updated: 2026-08-14T17:10:16+05:30 [Commit #518] -->


<!-- Updated: 2026-08-15T10:15:43+05:30 [Commit #521] -->
