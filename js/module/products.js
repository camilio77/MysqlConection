import { connection } from "../../helpers/connection";

export const getAllProducts = async () => {
    const [results] = await connection.query(`select productName, quantityInStock from products;`);
    return results;
}

export const getTotalProductsInStock = async () => {
    const [results] = await connection.query(`select COUNT(*) as 'productsInStock' from products where quantityInStock != 0;`);
    return results;
}

export const getAllProductsWithPriceMoreThan5 = async () => {
    const [results] = await connection.query(`select productCode, buyPrice from products where buyPrice > 50;`);
    return results;
}

export const getAllProductsAndQuaantityOrdered = async () => {
    const [results] = await connection.query(`SELECT productName, SUM(quantityOrdered) AS totalQuantityOrdered FROM products JOIN orderdetails using(productCode)  GROUP BY productName;`);
    return results;
}