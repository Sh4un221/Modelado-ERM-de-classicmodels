import { connection } from "../../helpers/conexion.js";

export const getShippedOrders = async () => {
    const [result] = await connection.execute(`SELECT orderNumber, orderDate, status FROM orders WHERE status = 'Shipped'`);
    result["count"] = result.length;
    return result;
}

//MULTITABLA:
export const getOrdersWithDetailsForCustomer = async ({ customerNumber } = { customerNumber: 101 }) => {
    const [result] = await connection.execute(`SELECT orderNumber, orderDate, status, customerNumber FROM orders INNER JOIN customers USING(customerNumber) WHERE customerNumber = ?`, [customerNumber]);
    result["count"] = result.length;
    return result;
}
