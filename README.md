# NEMA (NodeJS, mySQL) - JKH

Welcome to the Noob Employee Management API documentation. This API is designed to manage employees, clients, services, and tasks.

## Endpoints

This portion of the readme provides an overview of the available endpoints and the actions you can perform for each of these entities.

| Entity            | HTTP Method | Endpoint                 | Action             |
|-------------------|-------------|--------------------------|---------------------|
| Employee/User     | GET         | `/users/`                | Get all employees   |
|                   | GET         | `/users/:id`             | Get employee by ID  |
|                   | GET         | `/users/role/:id`        | Get all employees by role |
|                   | POST        | `/users/`                | Create an employee entry |
|                   | PUT         | `/users/:id`             | Edit an employee entry   |
|                   | DELETE      | `/users/:id`             | Delete an employee entry |
| Client/Customer   | GET         | `/clients/`              | Get all customers   |
|                   | GET         | `/clients/:id`           | Get customer by ID  |
|                   | GET         | `/clients/user/:id`      | Get all customers of a user |
|                   | POST        | `/clients/`              | Create a customer entry |
|                   | PUT         | `/clients/:id`           | Edit a customer entry   |
|                   | DELETE      | `/clients/:id`           | Delete a customer entry |
| Service           | GET         | `/services/`             | Get all services   |
|                   | GET         | `/services/:id`          | Get service by ID  |
|                   | POST        | `/services/`             | Create a service entry |
|                   | PUT         | `/services/:id`          | Edit a service entry   |
|                   | DELETE      | `/services/:id`          | Delete a service entry |
| Task              | GET         | `/tasks/`                | Get all tasks       |
|                   | GET         | `/tasks/:id`             | Get task by ID      |
|                   | GET         | `/tasks/user/:id`        | Get all tasks of a user |
|                   | GET         | `/tasks/client/:id`      | Get all tasks of a client |
|                   | GET         | `/tasks/service/:id`     | Get all tasks related to a service |
|                   | POST        | `/tasks/`                | Create a task entry |
|                   | PUT         | `/tasks/:id`             | Edit a task entry   |
|                   | DELETE      | `/tasks/:id`             | Delete a task entry |

## Database

This portion of the readme outlines the schema or structure of the data that you can expect when interacting with the API.

**DB**      : mySQL

**Schema**  : A000NEMA

**DDL**     :
```sql
CREATE TABLE `ENTSER` (
  `ServiceID` INT,
  `ServiceName` VARCHAR(100),
  `Detail` TEXT,
  PRIMARY KEY (`ServiceID`)
);

CREATE TABLE `INTEMP` (
  `EmployeeID` INT,
  `LastName` VARCHAR(45),
  `FirstName` VARCHAR(60),
  `MiddleName` VARCHAR(45),
  `Role` INT,
  `Status` INT,
  PRIMARY KEY (`EmployeeID`)
);

CREATE TABLE `EXTCLI` (
  `ClientID` INT,
  `LastName` VARCHAR(45),
  `FirstName` VARCHAR(60),
  `MiddleName` VARCHAR(45),
  `Email` VARCHAR(100),
  `EmployeeID` INT,
  PRIMARY KEY (`ClientID`),
  FOREIGN KEY (`EmployeeID`) REFERENCES `INTEMP`(`EmployeeID`)
);

CREATE TABLE `ENTTAS` (
  `TaskID` INT,
  `TaskName` VARCHAR(100),
  `Detail` TEXT,
  `ServiceID` INT,
  `ClientID` INT,
  `EmployeeID` INT,
  PRIMARY KEY (`TaskID`),
  FOREIGN KEY (`EmployeeID`) REFERENCES `INTEMP`(`EmployeeID`),
  FOREIGN KEY (`ServiceID`) REFERENCES `ENTSER`(`ServiceID`),
  FOREIGN KEY (`ClientID`) REFERENCES `EXTCLI`(`ClientID`)
);
