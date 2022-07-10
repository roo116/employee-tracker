const inquirer = require("inquirer");
// const db = require("../db/connection");
const cTable = require('console.table');
const { viewAllDept, viewAllRoles, viewAllEmps, addDept, addRole, addEmployee } = require('./queries');

menu = [
    {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role"
        ],
    },
];

addDeptQs = [
    {
        name: "addRecord",
        type: "list",
        message: "Please select the name of the department"
    }
]

addRoleQs = [
    {
        name: "addTitle",
        type: "input",
        message: "Please enter the name of the role"
    },
    {
        name: "addSalary",
        type: "input",
        message: "Please enter the salary",
        validate: addSalaryInput => {
            if (Number(addSalaryInput)) {
                return true;
            } else {
                console.log('You have to enter a number');
                return false;
            }
        }
    },
    {
        name: "addDeptId",
        type: "list",
        message: "Please select the department",
        choices: ['Corporate', 'Admin', 'Accounting', 'Sales', 'Distribution', 'Human Resources']
    }

]

addEmpQs = [
    {
        name: 'addFirstName',
        type: 'input',
        message: "Add employee's first name"
    },
    {
        name: 'addLastName',
        type: 'input',
        message: "Add employee's last name"
    },
    {
        name: "addRoleId",
        type: "input",
        message: "Add employee role"
    },
    {
        name: "addMgrId",
        type: "list",
        message: "Select the manager for this employee",
        choices: ["Alan Brand", "David Wallace", "Jan Levinson-Gould", "Michael Scott", "Daryl Philbin", "Angela Martin"]
    }
]

updateEmpQs = [
    {
        name: "updateEmp",
        type: 
    }
]

function selectAction() {
    inquirer.prompt(menu).then((answers) => {
        switch (answers.action) {
            case "View all departments":
                viewAllDept();
                break;

            case "View all roles":
                viewAllRoles();
                break;

            case "View all employees":
                viewAllEmps()
                break;

            case "Add a department":
                inquirer.prompt(addDeptQs).then((answers) => {
                    addDept(answers);
                })
                break;

            case "Add a role":
                inquirer.prompt(addRoleQs).then((answers) => {
                    switch (answers.addDeptId) {
                        case 'Corporate':
                            answers.addDeptId = 1;
                            console.log(answers)
                            addRole(answers);
                            break;

                        case 'Admin':
                            answers.addDeptId = 2;
                            console.log(answers)
                            addRole(answers);
                            break;

                        case 'Accounting':
                            answers.addDeptId = 3;
                            console.log(answers)
                            addRole(answers);
                            break;

                        case 'Sales':
                            answers.addDeptId = 4;
                            console.log(answers)
                            addRole(answers);
                            break;

                        case 'Distribution':
                            answers.addDeptId = 5;
                            console.log(answers)
                            addRole(answers);
                            break;

                        case 'Human Resources':
                            answers.addDeptId = 6;
                            console.log(answers)
                            addRole(answers);
                            break;
                    };
                })
                break;

            case "Add an employee":
                console.log("db logic to add an employee to employee table");
                inquirer.prompt(addEmpQs).then((answers) => {
                    console.log(answers);
                    switch (answers.addMgrId) {
                        case "Alan Brand":
                            answers.addMgrId = 2;
                            answers.addRoleId = 2;
                            console.log(answers)
                            addEmployee(answers);
                            break;

                        case "David Wallace":
                            answers.addMgrId = 3;
                            answers.addRoleId = 3;
                            console.log(answers)
                            addEmployee(answers);
                            break;

                        case "Jan Levinson-Gould":
                            answers.addMgrId = 1;
                            answers.addRoleId = 4;
                            console.log(answers)
                            addEmployee(answers);
                            break;

                        case "Michael Scott":
                            answers.addMgrId = 11;
                            answers.addRoleId = 5;
                            console.log(answers)
                            addEmployee(answers);
                            break;

                        case "Daryl Philbin":
                            answers.addMgrId = 18;
                            answers.addRoleId = 9;
                            console.log(answers)
                            addEmployee(answers);
                            break;

                        case "Angela Martin":
                            answers.addMgrId = 9;
                            answers.addRoleId = 12;
                            console.log(answers)
                            addEmployee(answers);
                            break;
                    };
                });
                break;

            case "Update an employee role":
                console.log("logic to update an employee role (join, foreign key)")
                break;
        }
        return;
    });

};

selectAction();

// module.exports = selectAction

// case answers.choices[0]:
//                 console.log ("This is what was returned for answers.choices[0]", answers.choices[0]);
//                 break;

//         }
//     })
// };
