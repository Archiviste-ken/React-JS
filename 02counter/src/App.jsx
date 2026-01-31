import { useState } from 'react'  // hook yahi se aata hai
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter, setCounter] = useState(15) // setCounter is function to update counter value
 // useState hook is used to create state variable in functional componentate 
  // let counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    
  //  counter = counter + 1
  setCounter(counter + 1)  // updating the counter value using setCounter function
}

  const removeValue = () => {
    console.log("remove clicked", counter);
    
    // counter = counter - 1
    setCounter(counter - 1)  // updating the counter value using setCounter function
  }
    
  return (
    <>
      <h1> Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick= {addValue}>Add button {counter}</button>
      <br />
      <button
      onClick = {removeValue}>remove value {counter} </button>
      <p>footer: {counter}</p>
    </>
  )
}





export default App
