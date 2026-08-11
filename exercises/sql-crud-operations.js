const { executeQuery } = require('./mysql-connection-pool');

async function getStudentById(id) {
  const rows = await executeQuery('SELECT * FROM students WHERE id = ?', [id]);
  return rows[0] || null;
}

async function updateStudentEmail(id, newEmail) {
  const result = await executeQuery('UPDATE students SET email = ? WHERE id = ?', [newEmail, id]);
  return result.affectedRows > 0;
}

module.exports = { getStudentById, updateStudentEmail };


<!-- Updated: 2026-08-11T12:09:48+05:30 [Commit #499] -->
