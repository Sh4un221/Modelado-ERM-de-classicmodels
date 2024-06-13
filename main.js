import { 
    getCustomerDetails,
    getCustomerPayments,
    getCustomersInCity,
    getCustomersWithSalesRep
} from "./js/module/customers.js";

import { 
    getEmployeesInOffice,
    getEmployeesWithBoss,
    getEmployeesWithOffices
} from "./js/module/employees.js";

import {
    getOfficesInCountry,
    getOfficesWithEmployeeCount
}from "./js/module/offices.js"

import {
    getShippedOrders,
    getOrdersWithDetailsForCustomer
}from "./js/module/orders.js"

import {
    getAllProductsInStock,
    getTotalProductsInStock,
    getProductsAbovePrice,
    getProductsWithTotalOrdered
}from "./js/module/products.js"


console.log(await getAllProductsInStock());
// console.log(await getEmployeesInOffice({ officeCode: 1 }));
// console.log(await getCustomerDetails({ customerNumber: 101 }));
// console.log(await getCustomerPayments({ customerNumber: 101 }));
// console.log(await getShippedOrders());
// console.log(await getTotalProductsInStock());
// console.log(await getEmployeesWithBoss());
// console.log(await getOfficesInCountry({ country: 'USA' }));
// console.log(await getCustomersInCity({ city: 'Madrid' }));
// console.log(await getProductsAbovePrice({ price: 50 }));
// console.log(await getOrdersWithDetailsForCustomer({ customerNumber: 101 }));
// console.log(await getEmployeesWithOffices());
// console.log(await getCustomersWithSalesRep());
// console.log(await getProductsWithTotalOrdered());
// console.log(await getOfficesWithEmployeeCount());