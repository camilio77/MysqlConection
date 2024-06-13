import { connection } from "../../helpers/connection";

export const getAllOficesFromACountry = async () => {
    const [results] = await connection.query(`select officeCode, city, phone, addressLine1, addressLine2, state, country, postalCode, territory from offices where country = 'USA';`);
    return results;
}

export const getAllOfficesAndTotalEmployeesFromEachOne = async () => {
    const [results] = await connection.query(`select officeCode, city, country, COUNT(officeCode) as 'officeEmployees' from employees inner join offices using(officeCode) group by officeCode;`);
    return results;
}