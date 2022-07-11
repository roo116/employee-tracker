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
        type: "input",
        message: "Please type the name of the department"
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
        type: "list",
        message: "Select employee role",
        choices: ['Executive', 'VP', 'Regional Manager', 'Sales Representative', 'Receptionist', 'Temporary', 'Supplier Relations', 'Warehouse', 'Warehouse Manager', 'Human Resources', 'Mgr - Accounting', 'Accountant', 'Customer Service']
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
        name: "addEmpId",
        type: "list",
        message: "Select the employee you wish to update",
        choices: ["Pam Beasley", "Ryan Howard", "Meredith Palmer", "Creed Bratton", "Kevin Malone", "Angela Martin", "Oscar Martinez", "Jim Halpert", "Dwight Schrute", "Stanley Hudson", "Kelly Kapoor", "Phyllis Lapin", "Roy Anderson", "Daryl Philbin"]
    },
    {
        name: 'addRoleId',
        type: "list",
        message: "Select the new role",
        choices: ['Executive', 'VP', 'Regional Manager', 'Sales Representative', 'Receptionist', 'Temporary', 'Supplier Relations', 'Warehouse', 'Warehouse Manager', 'Human Resources', 'Mgr - Accounting', 'Accountant', 'Customer Service']
    }

]

function selectAction() {
    inquirer.prompt(menu).then((answers) => {
        switch (answers.action) {
            case "View all departments":
                viewAllDept();
                mainMenu()
                break;

            case "View all roles":
                viewAllRoles();
                break;

            case "View all employees":
                viewAllEmps()
                break;

            case "Add a department":
                inquirer.prompt(addDeptQs).then((answers) => {
                    answers = answers.addRecord
                    addDept(answers);
                })
                break;

            case "Add a role":
                inquirer.prompt(addRoleQs).then((answers) => {
                    if (answers.addDeptId === 'Corporate') {
                        answers.addDeptId = 1;
                        addRole(answers)
                    }

                    if (answers.addDeptId === 'Admin') {
                        answers.addDeptId = 2;
                        addRole(answers)
                    }

                    if (answers.addDeptId === 'Accounting') {
                        answers.addDeptId = 3;
                        addRole(answers)
                    }

                    if (answers.addDeptId === 'Sales') {
                        answers.addDeptId = 4;
                        addRole(answers)
                    }

                    if (answers.addDeptId === 'Distribution') {
                        answers.addDeptId = 5;
                        addRole(answers)
                    }

                    if (answers.addDeptId === 'Human Resources') {
                        answers.addDeptId = 6;
                        addRole(answers)
                    };

                });
                break;

            case "Add an employee":
                console.log("db logic to add an employee to employee table");
                inquirer.prompt(addEmpQs).then((answers) => {
                    if (answers.addRoleId === "Executive") {
                        answers.addMgrId = 2;
                        answers.addRoleId = 2;
                        addEmployee(answers);
                    }

                    if (answers.addRoleId === 'VP') {
                        answers.addMgrId = 3;
                        answers.addRoleId = 3;
                        addEmployee(answers);
                    }

                    if (answers.addRoleId === 'Regional Manager') {
                        answers.addMgrId = 1;
                        answers.addRoleId = 4;
                        addEmployee(answers);
                    }

                    if (answers.addRoleId === 'Sales Representative') {
                        answers.addMgrId = 11;
                        answers.addRoleId = 5;
                        addEmployee(answers);
                    }

                    if (answers.addRoleId === 'Receptionist' || answers.addRoleId === 'Temporary') {
                        answers.addMgrId = 11;
                        answers.addRoleId = 6;
                        addEmployee(answers);
                    }

                    if (answers.addRoleId === 'Supplier Relations') {
                        answers.addMgrId = 11;
                        answers.addRoleId = 8;
                        addEmployee(answers);
                    }

                    if (answers.addRoleId === 'Warehouse') {
                        answers.addMgrId = 18;
                        answers.addRoleId = 9;
                        addEmployee(answers);
                    }

                    if (answers.addRoleId === 'Warehouse Manager') {
                        answers.addMgrId = 11;
                        answers.addRoleId = 10;
                        addEmployee(answers);
                    }

                    if (answers.addRoleId === 'Human Resources') {
                        answers.addMgrId = 1;
                        answers.addRoleId = 6;
                        addEmployee(answers);
                    }

                    if (answers.addRoleId === 'Mgr - Accounting') {
                        answers.addMgrId = 11;
                        answers.addRoleId = 3;
                        addEmployee(answers);
                    };

                    if (answers.addRoleId === 'Accountant') {
                        answers.addMgrId = 9;
                        answers.addRoleId = 3;
                        addEmployee(answers);
                    };

                    if (answers.addRoleId === 'Customer Service') {
                        answers.addMgrId = 11;
                        answers.addRoleId = 13;
                        addEmployee(answers);
                    };
                });
                break;

            case "Update an employee role":
                inquirer.prompt(updateEmpQs).then((answers) => {
                    if (answers.addRoleId === "Pam Beasley") {
                        answers.updateEmpId = 4;
                        answers.addRoleId = 2;
                        updateEmployee(answers);
                    }

                    if (answers.addRoleId === 'VP') {
                        answers.addMgrId = 3;
                        answers.addRoleId = 3;
                        updateEmployee(answers);
                    }

                    if (answers.addRoleId === 'Regional Manager') {
                        answers.addMgrId = 1;
                        answers.addRoleId = 4;
                        updateEmployee(answers);
                    }

                    if (answers.addRoleId === 'Sales Representative') {
                        answers.addMgrId = 11;
                        answers.addRoleId = 5;
                        updateEmployee(answers);
                    }

                    if (answers.addRoleId === 'Receptionist' || answers.addRoleId === 'Temporary') {
                        answers.addMgrId = 11;
                        answers.addRoleId = 6;
                        updateEmployee(answers);
                    }

                    if (answers.addRoleId === 'Supplier Relations') {
                        answers.addMgrId = 11;
                        answers.addRoleId = 8;
                        updateEmployee(answers);
                    }

                    if (answers.addRoleId === 'Warehouse') {
                        answers.addMgrId = 18;
                        answers.addRoleId = 9;
                        updateEmployee(answers);
                    }

                    if (answers.addRoleId === 'Warehouse Manager') {
                        answers.addMgrId = 11;
                        answers.addRoleId = 10;
                        updateEmployee(answers);
                    }

                    if (answers.addRoleId === 'Human Resources') {
                        answers.addMgrId = 1;
                        answers.addRoleId = 6;
                        updateEmployee(answers);
                    }

                    if (answers.addRoleId === 'Mgr - Accounting') {
                        answers.addMgrId = 11;
                        answers.addRoleId = 3;
                        updateEmployee(answers);
                    };

                    if (answers.addRoleId === 'Accountant') {
                        answers.addMgrId = 9;
                        answers.addRoleId = 3;
                        updateEmployee(answers);
                    };

                    if (answers.addRoleId === 'Customer Service') {
                        answers.addMgrId = 11;
                        answers.addRoleId = 13;
                        updateEmployee(answers);
                    };
                });
        };
    });
};



module.exports = selectAction
