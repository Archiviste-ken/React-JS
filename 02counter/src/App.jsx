import { useState } from 'react'  // hook yahi se aata hai
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   const [counter, setCounter] =  useState(15)

  // let counter = 15

  const addValue = () => {
    console.log("clicked",counter);
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (

    <>
      <h1>This is react</h1>
      <h2> Counter value: {counter}</h2>

      <button
      onClick={addValue}> Add Value {counter}</button>
      <br />
      <button onClick ={removeValue}>remove value</button>
      <p>footer: {counter}</p>
      </>
  )

}

export default App