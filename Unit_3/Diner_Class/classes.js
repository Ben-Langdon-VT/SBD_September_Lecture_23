/* 
    -Employee
        -Manager
        -Host
        -Server
    -Table
*/

const employeeNumbers = [];

class Employee{
    static setEmployee(role, name, payRate){
        //create a random employee number
        let setEmployeeNumber = 0;
        do {
            let setEmployeeNumber = Math.floor(Math.random()*(100-1)+1);
        } while(employeeNumbers.includes(setEmployeeNumber));
        const endNumber = setEmployeeNumber;
        employeeNumbers.push(endNumber);
        
        //HireDate
        const hireDate = Date();


        return new role(name, endNumber, hireDate, payRate);
    }

    constructor(name, empNumber, date, payRate){
        this.name = name;
        this.employee_number = empNumber;
        this.dateHired = date;
        this.payRate = Number(payRate.toFixed(2));
    }
}

class Manager extends Employee {
    constructor(name, empNumber, date, payRate){
        super(name, empNumber, date, payRate);
        this.role = "Manager";
    }
}

class Host extends Employee {
    constructor(name, empNumber, date, payRate){
        super(name, empNumber, date, payRate);
        this.role = "Host";
    }
}

class Server extends Employee {
    constructor(name, empNumber, date, payRate){
        super(name, empNumber, date, payRate);
        this.role = "Server";
    }
}

class Table {

}

const manager = new Employee.setEmployee(Manager,'Joe', 18);
console.log(employee, manager);