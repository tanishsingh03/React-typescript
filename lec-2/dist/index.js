"use strict";
//type narrowing
Object.defineProperty(exports, "__esModule", { value: true });
//union --type widening
function someValue(arg) {
    //narrowing 
    if (typeof arg === "string") {
        return arg.toUpperCase();
    }
}
someValue("Hello");
someValue(42);
someValue(true);
// let e: EmporTeamLead = {
//     id: 1,
//     name: "John Doe",
//     age: 30,
//     projectId: "P123"
// };
let e = {
    id: 2,
    name: "Jane Smith",
    age: 28,
    phone: 1234567890
};
function returnPhone(arg) {
    if ("phone" in arg) {
        return arg.phone;
    }
    return 0;
}
returnPhone(e);
//instanceo of 
//# sourceMappingURL=index.js.map