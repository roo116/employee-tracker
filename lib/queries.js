const cTable = require("console.table");
const db = require('../db/connection');

function viewAllDept() {
  const sql = `SELECT * FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows)
  });
}

function viewAllRoles() {
  const sql = `SELECT * FROM role`

  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);

  })
}

module.exports = {
  viewAllDept,
  viewAllRoles
}


