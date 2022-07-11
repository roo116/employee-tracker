const cTable = require("console.table");
const db = require('../db/connection');

function viewAllDept() {
  const sql = `select * from department`;

  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);
    return;
  });
}

function viewAllRoles() {
  const sql = `select * from role`

  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);

  })
}

function viewAllEmps() {
  const sql = `select 
  e.id,
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

function addDept(data) {
  const sql = `insert into department (name) values ('${data}')`;
  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(`
    
    Added ${data} to department table
    
    `)
  });

};

function addRole(data) {
  console.log("in addRole function");

  const sql = `insert into role (title, salary, department_id) values ('${data.addTitle}', '${data.addSalary}', '${data.addDeptId}')`;

  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(`

    Added ${data.addTitle}, ${data.addSalary}, ${data.addDeptId} to role table

    `)
  });

}

function addEmployee(data) {
  const sql = `insert into employee (first_name, last_name, role_id, manager_id) values ('${data.addFirstName}', '${data.addLastName}', ${data.addRoleId}, ${data.addMgrId})`;

  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(`

    Added ${data.addFirstName}, ${data.addLastName}, ${data.addRoleId}, ${data.addMgrId} to employee table

    `)
  });
}

// function updateEmployee() {
//   const sql = `update employee set role_id to ${data.addRoleId}
//   where employee.id = ${data.addEmpId}`
//   db.query(sql, (err, rows) => {
//     if (err) {
//       throw err;
//     }
//     console.log(`

//     Updated Employee ID #${data.updateEmpId} in employee table

//     `)
//   });
// }

module.exports = {
  viewAllDept,
  viewAllRoles,
  viewAllEmps,
  addDept,
  addRole,
  addEmployee
}


