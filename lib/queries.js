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
// viewAllDept()

module.exports = {viewAllDept}


