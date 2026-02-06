//type narrowing

//union --type widening


function someValue(arg: string | number | boolean){
    //narrowing 
    if(typeof arg === "string"){
        return arg.toUpperCase();
    }

}


someValue("Hello");
someValue(42);
someValue(true);

interface Emp{
    id: number;
    name: string;
    age: number;
    phone: number;
}
interface TeamLead{
    id: number;
    name: string;
    age: number;
    projectId:string;
}

type EmporTeamLead = Emp | TeamLead;
// let e: EmporTeamLead = {
//     id: 1,
//     name: "John Doe",
//     age: 30,
//     projectId: "P123"
// };
let e: EmporTeamLead = {
    id: 2,
    name: "Jane Smith",
    age: 28,
    phone: 1234567890
};

function returnPhone (arg: EmporTeamLead){
    if("phone" in arg){
        return arg.phone;
    }
    return 0;
}

returnPhone(e);



//instanceo of 


