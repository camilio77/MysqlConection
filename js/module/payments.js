import { connection } from "../../helpers/connection";

export const getAllPaymentsFromACustomer = async () => {
    const [results] = await connection.query(`select customerNumber, checkNumber, paymentDate, amount from payments where customerNumber = 101;`);
    return results;
}