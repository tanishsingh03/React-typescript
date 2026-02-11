import React from 'react'
import First from './Components/First'
const name="tanish"
const onClick = () => {
  alert("Button clicked!");
}

function Simple(){
  return <h1>Simple Component</h1>;
}
let a=10;
let b=1;
//app component
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>hello {name}</h2>
      <button onClick={onClick}>click me </button>
      <Simple />  
      <Simple />
      <First />
      <Header />
      <h3>{a + b}</h3>
    </div>
  )
}

function Header(){
  return(
    <div>
      <h1>Header Component</h1>
      <ul>
        <li>
          <p>Item 1</p>
        </li>
        <li>
          <p>Item 2</p>
        </li>
      </ul>
    </div>

  )
}



export default App







//jsx is a xml syntax which look like html like code and we can embed javascript expressions inside curly braces {}




// difference between html and jsx
// 1. JSX allows us to write HTML-like syntax in our JavaScript code.
// 2. In JSX, we can embed JavaScript expressions inside curly braces {}.
// 3. JSX is not a string, it's a syntax extension for JavaScript.
// 4. JSX is transformed into JavaScript function calls by Babel.
// we can directly embed JavaScript expressions inside JSX. where as we have to use dom manipulation in html.
// 5. JSX is more concise and easier to read than traditional JavaScript code.







//babel is a javascript compiler that allows us to use next generation javascript features
// it converts JSX into regular JavaScript code
// it does this by transforming JSX syntax into React.createElement calls





//difference between call , apply and bind
// all three is used to change the context of 'this' 
// 1. call() - calls a function with a given this value and arguments provided individually.
// arguments are comma separated example
// functionName.call(thisArg, arg1, arg2, ...)

// 2. apply() - calls a function with a given this value and arguments provided as an array.
// arguments are passed as array
// functionName.apply(thisArg, [argsArray])

// 3. bind() - returns a new function, permanently bound to the first argument (this value) and any subsequent arguments.
//arguments are comma separated
//it did not call the function immediately, instead it returned a new function that can be called later with the same this value and arguments. with change this bind to new object
// functionName.bind(thisArg, arg1, arg2, ...)

//where and how to use
// 1. call() - when you want to invoke a function immediately with a specific this value and arguments.
// 2. apply() - when you want to invoke a function immediately with a specific this value and an array of arguments.
// 3. bind() - when you want to create a new function with a specific this value and arguments, to be called later.

//how to use
// 1. call() - functionName.call(thisArg, arg1, arg2, ...)
// 2. apply() - functionName.apply(thisArg, [argsArray])
// 3. bind() - functionName.bind(thisArg, arg1, arg2, ...)





//what is hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the memory creation phase.
//simple word :  it allows us to use variables and functions before they are declared in the code.
//example
// console.log(x); // undefined
// var x = 5;
// console.log(x); // 5

//temporal dead zone 
//meaning :  it refers to the period of time during which a variable is not accessible
//why only let and const :  because they are block-scoped and not hoisted to the top of their block 
//why only var :  because it is function-scoped and hoisted to the top of its function


//difference between block-scoped and function-scoped
// block-scoped :  variables declared with let and const are only accessible within the block they are defined in
// function-scoped :  variables declared with var are accessible throughout the entire function



// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;
// console.log(y); // 10

// temporal dead zone
// console.log(z); // ReferenceError: Cannot access 'z' before initialization
// const z = 20;
// console.log(z); // 20

