import { useState } from 'react'  // hook yahi se aata hai
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   const [counter, setCounter] =  useState(15)

  // let counter = 15

  const addValue = () => {
    console.log("clicked",counter);
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  // prevCounter is the previous value of counter, and we are updating it by adding 1 to it. This way we ensure that we are always working with the latest value of counter, even if there are multiple updates in a short period of time.


  // prevCounter gives the existing state, it is the hidden feature of useState, it accepts a function callback, prevCounter is the last updatded state. 
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