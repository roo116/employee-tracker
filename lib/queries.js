const cTable = require("console.table");
const db = require('../db/connection');

function viewAllDept() {
  const sql = `SELECT * FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);
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

function viewAllEmps() {
  const sql = `Select employee.first_name, employee.last_name, role.title, role.salary, department.name
  from employee
  left join role as role on employee.role_id = role.id
  left join department as department on role.department_id = department.id`;

  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);
  });
}

function addDept() {
  console.log(action.choices)
  let name = 'test dept'
  const sql = `INSERT INTO department (name) VALUES ${name}`;
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
};


module.exports = {
  viewAllDept,
  viewAllRoles,
  viewAllEmps,
  addDept
}


