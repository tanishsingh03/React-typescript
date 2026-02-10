import React from 'react'
import First from './Components/First'
const name="tanish"
const onClick = () => {
  alert("Button clicked!");
}

function Simple(){
  return <h1>Simple Component</h1>;
}

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



//babel is a javascript compiler that allows us to use next generation javascript features
// it converts JSX into regular JavaScript code
// it does this by transforming JSX syntax into React.createElement calls