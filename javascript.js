


// //define this keyword in javascript
// “Kaun sa object currently function ko call kar raha hai”
// example: this = current owner / caller
// this --> is a reference variable which points to an object but its value depends on how the function is called

function getName(){
    this.name;
}
getName();
///this will get window in Global Context and global "{}" in node js

const user = {
    name : "John",
    getName: function(){
        return this.name;
    }
}