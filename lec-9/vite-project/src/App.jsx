// import React, { useState } from 'react'

// const App = () => {
//   const [inputValue, setInputValue] = useState('')
//   const [name, setName] = useState('')

//   const handleClick = () => {
//     setName(inputValue)
//   }

//   return (
//     <div>
//       <h1>Show Name On Click</h1>

//       <input
//         type="text"
//         placeholder="Enter text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />

//       <button onClick={handleClick}>
//         Show Name
//       </button>

//       <h2>My name is {name}</h2>
//     </div>
//   )
// }

// export default App





import React from 'react'
import { useState,useRef } from 'react'


const App = () => {
  const [showname,setShowname] = useState("")
  // const [name, setName] = useState('')
  const inref=useRef();

  // function changeName(newName) {
  //   setName(newName)
  // }

  const changeShowname = () => {
    setShowname(inref.current.value)
  }

  return (
    <div>
      <h1>useRef</h1>
      <input type="text" placeholder='Enter text' ref={inref} />
      <button onClick={changeShowname}>click</button>
      <h1>my name is {showname}</h1>
    </div>
  )
}

export default App



//use of useRef 
//to. get reference of any dom element 
//and directly manipulate the dom element without using state
//example: focusing an input element
//inref.current.focus()



//diff between useRef and usestate
//useRef is used to get a reference to a DOM element and directly manipulate it
//without causing a re-render of the component
//useState is used to manage state in a functional component
//and causes a re-render when the state is updated

//useRef does not trigger a re-render when the value changes
//useState triggers a re-render when the state changes


//what settimeout does
//setTimeout is a method that executes a function or a code snippet after a specified delay (in milliseconds).
//It is commonly used to delay the execution of a function or to perform an action after a certain period of time.
//it returns a timeout ID that can be used to clear the timeout later
//example
// setTimeout(() => {
//   console.log('Hello, world!');
// }, 1000);  



//what setInterval does
//setInterval is a method that repeatedly calls a function or executes a code snippet,
//with a fixed time delay between each call.
//It is commonly used to create a timer or to perform an action at regular intervals.
//it returns an interval ID that can be used to clear the interval later

//clearInterval is a method that stops the execution of a function that was set up to run at intervals
//by using the interval ID returned by setInterval
//returns undefined
//example
// const intervalId = setInterval(() => {
//   console.log('Hello, world!');
// }, 1000);

// clearInterval(intervalId);
