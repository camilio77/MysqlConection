1. **Obtener todos los productos en stock:**

   ```sql
   select productName, quantityInStock from products;
   ```

2. **Lista de empleados que trabajan en una oficina específica (por ejemplo, '1'):**

   ```sql
   select employeeNumber, lastName, firstName, extension, email, officeCode, reportsTo, jobTitle from employees where officeCode = 1;
   ```

3. **Detalles de un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   select customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit from customers where customerNumber = 101;
   ```

4. **Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   select customerNumber, checkNumber, paymentDate, amount from payments where customerNumber = 101;
   ```

5. **Obtener todos los pedidos con estado 'Shipped':**

   ```sql
   select orderNumber, status from orders where status = 'shipped';
   ```

6. **Cantidad total de productos en stock:**

   ```sql
   select COUNT(*) as 'productsInStock' from products where quantityInStock != 0;
   ```

7. **Lista de todos los empleados con su jefe (si tienen):**

   ```sql
   select employeeNumber, reportsTo AS 'employeeBoss' from employees where reportsTo IS NOT NULL;
   ```

8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**

   ```sql
   select officeCode, city, phone, addressLine1, addressLine2, state, country, postalCode, territory from offices where country = 'USA';
   ```

9. **Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):**

   ```sql
   select customerNumber, city from customers where city = 'Madrid';
   ```

10. **Productos con precio de compra mayor a 50:**

    ```sql
    select productCode, buyPrice from products where buyPrice > 50;
    ```

### Consultas Multitabla

1. **Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:**

   ```sql
   select customerNumber, orderNumber, productCode, productName from orders inner join orderdetails using(orderNumber) inner join products using(productCode) where customerNumber = 101;
   ```

2. **Listar todos los empleados junto con la oficina en la que trabajan:**

   ```sql
   select employeeNumber, officeCode, country as 'officeCountry', city as 'officeCity' from employees cross join offices using(officeCode);
   ```

3. **Listar todos los clientes junto con su representante de ventas:**

   ```sql
   select customerNumber, customerName, employeeNumber as 'salesManagerCode', firstName as 'salesManagerFirstName' from customers cross join employees ON employeeNumber = salesRepEmployeeNumber;
   ```

4. **Obtener el nombre y la cantidad total ordenada de cada producto:**

   ```sql
   SELECT productName, SUM(quantityOrdered) AS totalQuantityOrdered FROM products JOIN orderdetails using(productCode)  GROUP BY productName;
   ```

5. **Listar todas las oficinas y el número de empleados en cada una:**

   ```sql
   select officeCode, city, country, COUNT(officeCode) as 'officeEmployees' from employees inner join offices using(officeCode) group by officeCode;
   ```