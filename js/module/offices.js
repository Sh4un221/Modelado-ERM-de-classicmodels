import { connection } from "../../helpers/conexion.js";

export const getOfficesInCountry = async ({ country } = { country: 'USA' }) => {
    const [result] = await connection.execute(`SELECT officeCode, city, state, country FROM offices WHERE country = ?`, [country]);
    result["count"] = result.length;
    return result;
}

//MULTITABLA
export const getOfficesWithEmployeeCount = async () => {
    const [result] = await connection.execute(`SELECT city, phone, state, postalCode, officeCode, COUNT(employeeNumber) as numberOfEmployees FROM offices INNER JOIN employees USING (officeCode) GROUP BY officeCode`);
    result["count"] = result.length;
    return result;
}
