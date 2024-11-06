"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result1 = add('10', '20');
    console.log(result1);
    const getUser = (user) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role.toUpperCase()}`);
        }
        else {
            console.log(`My name is ${user.name} and my role is USER`);
        }
    };
    const normalUser = {
        name: "AKD"
    };
    const adminUser = {
        name: "Ayan",
        role: "admin"
    };
    getUser(normalUser);
    getUser(adminUser);
}
