SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO department (name) 
VALUES
('Corporate'),
('Admin'),
('Accounting'),
('Sales'),
('Distribution'),
('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES
('CEO', 1000000, 1),
('CFO', 500000, 1),
('VP', 300000, 1),
('Regional Sales Manager', 80000, 4),
('Sales Representative', 50000, 4),
('Receptionist', 40000, 2),
('Temporary', 30000, 2),
('Supplier Relations', 50000, 5),
('Warehouse', 45000, 5),
('Warehouse Manager', 60000, 5),
('Human Resources Representative', 75000, 6),
('Accountant', 90000, 3),
('Customer Service', 40000, 4),
('Quality Assurance', 40000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jan','Levinson-Gould',3,3),
('Alan','Brand',1,NULL),
('David','Wallace',2,2),
('Pam','Beasley',6,11),
('Ryan','Howard',7,11),
('Meredith','Palmer',8,11),
('Creed','Bratton',13,18),
('Kevin','Malone',11,9),
('Angela','Martin',11,11),
('Oscar','Martinez',11,9),
('Michael','Scott',4,1),
('Jim','Halpert',5,11),
('Dwight','Schrute',5,11),
('Stanley','Hudson',5,11),
('Kelly','Kapoor',12,11),
('Phyllis','Lapin',5,11),
('Roy','Anderson',9,18),
('Daryl','Philbin',9,11),
('Toby','Flenderson',10,3);

SET FOREIGN_KEY_CHECKS = 1;



