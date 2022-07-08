const inquirer = require("inquirer")
const { viewAllDept, viewAllRoles } = require('./queries');

questions = [
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
            "Update an employee role",
        ],
    },
];

function selectAction() {
    inquirer.prompt(questions).then((answers) => {
        switch (answers.action) {
            case "View all departments":
                viewAllDept();
                break;

            case "View all roles":
                viewAllRoles();
                break;

            case "View all employees":
                console.log("db query select * from employees");
                break;

            case "Add a department":
                console.log("command to add a dept");
                break;

            case "Add a role":
                console.log("add a role to role table");
                break;

            case "Add an employee":
                console.log("db logic to add an employee to employee table");
                break;

            case "Update an employee role":
                console.log("logic to update an employee role (join, foreign key)")
        }
    });
}

// selectAction();

module.exports = selectAction

// case answers.choices[0]:
//                 console.log ("This is what was returned for answers.choices[0]", answers.choices[0]);
//                 break;

//         }
//     })
// };
