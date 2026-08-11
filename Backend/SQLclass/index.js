const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tanya',
  database: 'delta_app',
});

connection.query("SHOW TABLES", (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
});

let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

  console.log(getRandomUser());