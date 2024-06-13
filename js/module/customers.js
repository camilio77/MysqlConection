import { connection } from "../../helpers/connection.js";

export const get = async () => {
    const [results] = await connection.query(`SELECT contactLastname, contactFirstname FROM customers ORDER BY contactLastname DESC, contactFirstname ASC`);
    return results;
}

export const getCustomerByCode = async () => {
    const [results] = await connection.query(`select customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit from customers where customerNumber = 101;`);
    return results;
}

export const getAllClientsFromACity = async () => {
    const [results] = await connection.query(`select customerNumber, city from customers where city = 'Madrid';`);
    return results;
}

export const getAllClientsWithSalesManager = async () => {
    const [results] = await connection.query(`select customerNumber, customerName, employeeNumber as 'salesManagerCode', firstName as 'salesManagerFirstName' from customers cross join employees ON employeeNumber = salesRepEmployeeNumber;`);
    return results;
}