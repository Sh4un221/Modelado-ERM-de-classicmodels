import { connection } from "../../helpers/conexion.js";

export const getAllProductsInStock = async () => {
    const [result] = await connection.execute(`SELECT productName, quantityInStock FROM products`);
    result["count"] = result.length;
    return result;
}

export const getTotalProductsInStock = async () => {
    const [result] = await connection.execute(`SELECT SUM(quantityInStock) AS totalDeProductosEnStock FROM products`);
    return result[0];
}

export const getProductsAbovePrice = async ({ price } = { price: 50 }) => {
    const [result] = await connection.execute(`SELECT productCode, productName, quantityInStock, buyPrice AS price FROM products WHERE buyPrice > ?`, [price]);
    result["count"] = result.length;
    return result;
}

//MULTITABLA
export const getProductsWithTotalOrdered = async () => {
    const [result] = await connection.execute(`SELECT productCode, productName, buyPrice, quantityInStock, quantityOrdered FROM products INNER JOIN orderdetails USING(productCode)`);
    result["count"] = result.length;
    return result;
}

