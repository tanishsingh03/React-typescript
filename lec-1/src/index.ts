//arg--> string[] or number[]
// type strOrNum = string | number 
// function firstValue(arg:strOrNum[]){
//     return arg[0];
// }

// let val = firstValue(["hello", "b" ,"c"]);
// let val2 = firstValue([1,2,3,4,5]);
// let val3 = firstValue(["hello", 2 ,"c"]);

//val--> "hello"
// val.toUpperCase();


//generic 


function firstValue<T>(arg: T[]){
    return arg[0];
}   

let val=firstValue<string>(["hello", "b" ,"c"]);
let val2=firstValue<number>([1,2,3,4,5]);

val?.toUpperCase();
val2?.toString();


interface User {
   readonly name: string;//readonly means we can't change the value of name after initialization 
    email: string;
    phone?: number;//? maek it optional even if try to console log out and don't have number it give undefiined
}
//requirement if user dont provide phone number
let user1: User = {
    name: "gg",
    email: "ddd"
};

let user2: User = {
    name: "tanish",
    email: "t@gmail.co",
    phone: 1234567890
};

console.log(user1.phone);//undefined



