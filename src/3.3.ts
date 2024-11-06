{
    //type guard

    //typeof type guard

    type Alphanumeric = string|number

    const add = (param1:Alphanumeric, param2:Alphanumeric):Alphanumeric =>{
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2;
        } else{
            return param1.toString() + param2.toString();
        }
    }

    const result1 = add('10', '20');
    console.log(result1);

    //in guard

    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: "admin"
    }

    const getUser = (user: NormalUser | AdminUser) =>{
        if('role' in user){
            console.log(`My name is ${user.name} and my role is ${user.role.toUpperCase()}`);
        } else {
            console.log(`My name is ${user.name} and my role is USER`);
        }
    }

    const normalUser : NormalUser = {
        name: "AKD"
    }

    const adminUser : AdminUser = {
        name: "Ayan",
        role: "admin"
    }

    getUser(normalUser);
    getUser(adminUser);

























}