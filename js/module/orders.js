import { connection } from "../../helpers/connection";

export const getAllOrdersWithStatus = async () => {
    const [results] = await connection.query(`select orderNumber, status from orders where status = 'shipped';`);
    return results;
}

export const getAllOrdersByClientWithDetails = async () => {
    const [results] = await connection.query(`select customerNumber, orderNumber, productCode, productName from orders inner join orderdetails using(orderNumber) inner join products using(productCode) where customerNumber = 101;`);
    return results;
}   