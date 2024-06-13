import {
    getAll, 
    getAllLastName, 
    getAllFullNameJob, 
    getAllEmployeesFromAnOffice, 
    getAllEmployeesWithBoss, 
    getAllEmployeesAndOfficeDetails 
} from "./js/module/employees.js";

import { 
    get,
    getCustomerByCode,
    getAllClientsFromACity,
    getAllClientsWithSalesManager
} from "./js/module/customers.js";

import {
    getAllOficesFromACountry,
    getAllOfficesAndTotalEmployeesFromEachOne
} from "./js/module/offices.js";

import {
    getAllOrdersWithStatus,
    getAllOrdersByClientWithDetails
} from "./js/module/orders.js";

import {
    getAllPaymentsFromACustomer
} from "./js/module/payments.js";

import {
    getAllProducts,
    getTotalProductsInStock,
    getAllProductsWithPriceMoreThan5,
    getAllProductsAndQuaantityOrdered
} from "./js/module/products.js";

console.log(await getAllProductsAndQuaantityOrdered());