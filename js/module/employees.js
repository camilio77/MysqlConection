import { connection } from '../../helpers/connection.js';

export const getAllLastName = async () => {
    const [results] = await connection.query(`SELECT lastName FROM employees`);
    return results;
}

export const getAllFullNameJob = async () => {
    const [results] = await connection.query(`SELECT CONCAT(firstName, ' ', lastName) AS fullName, jobTitle FROM employees`);
    return results;
}

export const getAll = async () => {
    const [results] = await connection.query(`SELECT employeeNumber, lastName, firstName, extension, email, officeCode, reportsTo, jobTitle FROM employees`);
    return results;
}

export const getAllEmployeesFromAnOffice = async () => {
    const [results] = await connection.query(`select employeeNumber, lastName, firstName, extension, email, officeCode, reportsTo, jobTitle from employees where officeCode = 1;`);
    return results;
}

export const getAllEmployeesWithBoss = async () => {
    const [results] = await connection.query(`select employeeNumber, reportsTo AS 'employeeBoss' from employees where reportsTo IS NOT NULL;`);
    return results;
}

export const getAllEmployeesAndOfficeDetails = async () => {
    const [results] = await connection.query(`select employeeNumber, officeCode, country as 'officeCountry', city as 'officeCity' from employees cross join offices using(officeCode);`);
    return results;
}