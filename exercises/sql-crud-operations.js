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


<!-- Updated: 2026-08-11T19:03:53+05:30 [Commit #504] -->


<!-- Updated: 2026-08-12T12:03:34+05:30 [Commit #508] -->


<!-- Updated: 2026-08-14T09:12:28+05:30 [Commit #514] -->


<!-- Updated: 2026-08-14T18:47:55+05:30 [Commit #519] -->
