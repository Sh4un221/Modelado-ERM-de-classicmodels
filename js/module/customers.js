import { connection } from "../../helpers/conexion.js";

// export const getAllLastNameASC = async()=>{
//     const [result] = await connection.query(`SELECT contactLastname, contactFirstname FROM customers ORDER BY contactLastname`);
//     return result;
// }

// export const getAllLastNameDESC = async()=>{
//     const [result] = await connection.query(`SELECT contactLastname, contactFirstname FROM customers ORDER BY contactLastname DESC`);
//     return result;
// }
export const getCustomerDetails = async ({ customerNumber } = { customerNumber: 101 }) => {
    const [result] = await connection.execute(`SELECT customerNumber, customerName, phone, city, state, creditLimit FROM customers WHERE customerNumber = ?`, [customerNumber]);
    result["count"] = result.length;
    return result;
}

export const getCustomerPayments = async ({ customerNumber } = { customerNumber: 101 }) => {
    const [result] = await connection.execute(`SELECT checkNumber, amount FROM payments WHERE customerNumber = ?`, [customerNumber]);
    result["count"] = result.length;
    return result;
}

export const getCustomersInCity = async ({ city } = { city: 'Madrid' }) => {
    const [result] = await connection.execute(`SELECT customerNumber, customerName, city, state, postalCode FROM customers WHERE city = ?`, [city]);
    result["count"] = result.length;
    return result;
}

//MULTITABLA
export const getCustomersWithSalesRep = async () => {
    const [result] = await connection.execute(`SELECT customerNumber, customerName, phone, city, state, creditLimit, salesRepEmployeeNumber, lastName, firstName, extension, officeCode, employeeNumber FROM customers INNER JOIN employees ON customers.salesRepEmployeeNumber = employeeNumber`);
    result["count"] = result.length;
    return result;
}

