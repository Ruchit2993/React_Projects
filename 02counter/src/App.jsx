import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,numCounter]=useState(5)
  //onst [count, setCount] = useState(0)
  //let counter =5
  const addValue = ()=> {

    //counter =counter +1
    numCounter(counter+1)
    console.log("Clicked", counter);
  }
  const removeValue =()=>{

    numCounter(counter-1)
    console.log("Clicked", counter);
  }
  return (
    <>
      <h1> WAkkku </h1>
      <h2> Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value </button>
      <br></br>
      <button
      onClick={removeValue}
      >Remove value {counter} </button>
      <p>Footer: {counter} </p>
    </>
  )
}

export default App
