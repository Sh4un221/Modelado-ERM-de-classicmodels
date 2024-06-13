PARA PROBAR LAS CONSULTAS USAR:
```js
npm i
```
1. **Obtener todos los productos en stock:**

   ```sql
   SELECT productName, quantityInStock FROM products;
   ```

2. **Lista de empleados que trabajan en una oficina específica (por ejemplo, '1'):**

   ```sql
   SELECT employeeNumber,firstName,lastName FROM employees WHERE officeCode=1;
   ```

3. **Detalles de un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   SELECT customerNumber,customerName,phone,city,state,creditLimit FROM customers WHERE customerNumber=103;
   ```

4. **Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   SELECT checkNumber,amount FROM payments WHERE customerNumber=103;
   ```

5. **Obtener todos los pedidos con estado 'Shipped':**

   ```sql
   SELECT orderNumber,orderDate,status FROM orders WHERE status='Shipped';
   ```

6. **Cantidad total de productos en stock:**

   ```sql
   SELECT SUM(quantityInStock) AS totalDeProductosEnStock FROM products;
   ```

7. **Lista de todos los empleados con su jefe (si tienen):**

   ```sql
   SELECT employeeNumber,lastName,firstName,extension,email,reportsTo AS boss FROM employees WHERE reportsTo IS NOT NULL;
   ```

8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**

   ```sql
   SELECT officeCode,city,state,country FROM offices WHERE country='USA';
   ```

9. **Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):**

   ```sql
   SELECT customerNumber,customerName,city,state,postalCode FROM customers WHERE city='Madrid';
   ```

10. **Productos con precio de compra mayor a 50:**

    ```sql
    SELECT productCode,productName,quantityInStock,buyPrice AS price FROM products WHERE buyPrice>50;
    ```

### Consultas Multitabla

1. **Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:**

   ```sql
   SELECT orderNumber,orderDate,status,customerNumber FROM orders INNER JOIN customers USING(customerNumber) WHEREcustomerNumber=103;
   ```

2. **Listar todos los empleados junto con la oficina en la que trabajan:**

   ```sql
   SELECT employeeNumber,lastName,firstName,extension,email,jobTitle,officeCode,city,phone,state,postalcode FROM employees INNER JOIN offices USING (officeCode);
   ```

3. **Listar todos los clientes junto con su representante de ventas:**

   ```sql
   SELECT customerNumber,customerName,phone,city,state,creditLimit,salesRepEmployeeNumber,lastName,firstName,extension,officeCode,employeeNumber FROM customers INNER JOIN employees ON customers.salesRepEmployeeNumber=employeeNumber;
   ```

4. **Obtener el nombre y la cantidad total ordenada de cada producto:**

   ```sql
   SELECT productCode,productName,buyPrice,quantityInStock,quantityOrdered FROM products INNER JOIN orderdetails USING(productCode);
   ```

5. **Listar todas las oficinas y el número de empleados en cada una:**

   ```sql
   SELECT city,phone,state,postalCode,officeCode,COUNT(employeeNumber) as numberOfEmployees FROM offices INNER JOIN employees USING (officeCode) GROUP BY officeCode;
   ```