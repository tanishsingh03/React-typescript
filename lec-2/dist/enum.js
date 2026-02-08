"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//enum --> set of constant values 
var Role;
(function (Role) {
    Role["USER"] = "user";
    Role["ADMIN"] = "admin";
})(Role || (Role = {}));
//type Role = "user" | "admin";
function addProduct(role) {
    if (role == "user") {
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
//# sourceMappingURL=enum.js.map