//enum --> set of constant values 
enum Role {
    USER = "user",
    ADMIN = "admin"
}
//type Role = "user" | "admin";
function addProduct (role:Role):string{
    if(role=="user"){
        return "not authorized ";

    }
    return "product added successfully";
}

// addProduct("user");
// addProduct("admin");

addProduct(Role.USER);
addProduct(Role.ADMIN);
console.log(addProduct(Role.USER));
console.log(addProduct(Role.ADMIN));

