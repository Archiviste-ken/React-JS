import { useState } from 'react'  // hook yahi se aata hai
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15

  const addValue = () => {
    console.log("clicked",counter);
   counter = counter + 1
  }

  return (

    <>
      <h1>This is react</h1>
      <h2> Counter value: {counter}</h2>

      <button
      onClick={addValue}> Add Value</button>
      <br />
      <button> Remove Value</button>
      </>
  )

}

export default App