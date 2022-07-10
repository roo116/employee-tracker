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
  const sql = `select 
  concat(e.first_name,' ',e.last_name) as "Employee", 
  role.title as 'Title', role.salary as 'Salary',
  department.name as 'Department',
  concat(m.first_name,' ',m.last_name) as "Manager"
  from employee e
  left join role on e.role_id = role.id
  left join department on role.department_id = department.id
  left join employee m ON m.id = e.manager_id`;

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
  viewAllEmps
}


