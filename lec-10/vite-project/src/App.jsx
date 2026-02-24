import React, { useState } from 'react'

const App = () => {
  const [number,setNumber]=useState(null);
  function generateNumber(){
    let num=Math.floor(Math.random()*10);
    setNumber(num);
  }
  return (
    <div>
      <h1> random number</h1>
      <button onClick={generateNumber}> random</button>
      <h2>{number}</h2>
      {number && (number==7?<div><h2>YOU WIN</h2><img src='https://img.freepik.com/free-vector/comic-style-enter-win-competition-background-play-giveaway-contest_1017-51319.jpg?semt=ais_user_personalization&w=740&q=80'></img></div>:<div><h2>YOU LOSE</h2><img src='https://media.istockphoto.com/id/996396922/photo/lose-sign.jpg?s=1024x1024&w=is&k=20&c=dUqjod3J4Q4NfUWASx3FOx7VVUGxpy3b6LzhIb3L6iw='></img></div>)}
    </div>
  )
}

export default App



//prop drilling
//Prop Drilling is a React pattern where props are passed through multiple intermediate components to reach a deeply nested child,
//even when those intermediate components do not need the data. It leads to tightly coupled and less maintainable component structures.
//It can be solved using Context API or state management libraries.