import { connection } from "../../helpers/conexion.js";


// export const getAll = async()=>{
//     const [result] = await connection.query(`SELECT lastName, firstName, extension, email, officeCode, reportsTo, jobTitle FROM employees`);
//     return result;
// }

// export const getAllJobTitle = async({cargo} = {cargo: "Sales Rep"})=>{
//     const [result] = await connection.execute(`SELECT CONCAT(firstName," ", lastName) as 'fullName' FROM employees where jobTitle = ?`, [cargo] );
//     result["count"] = result.length;
//     return result;
// }
export const getEmployeesInOffice = async ({ officeCode } = { officeCode: 1 }) => {
    const [result] = await connection.execute(`SELECT employeeNumber, firstName, lastName FROM employees WHERE officeCode = ?`, [officeCode]);
    result["count"] = result.length;
    return result;
}

export const getEmployeesWithBoss = async () => {
    const [result] = await connection.execute(`SELECT employeeNumber, lastName, firstName, extension, email, reportsTo AS boss FROM employees WHERE reportsTo IS NOT NULL`);
    result["count"] = result.length;
    return result;
}

//MULTITABLA
export const getEmployeesWithOffices = async () => {
    const [result] = await connection.execute(`SELECT employeeNumber, lastName, firstName, extension, email, jobTitle, officeCode, city, phone, state, postalcode FROM employees INNER JOIN offices USING (officeCode)`);
    result["count"] = result.length;
    return result;
}
