import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './cardComponents/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className= 'bg-cyan-400 text-black p-4 rounded'>Tailwind test </h1>
      <Card username="It's Ruchit Here" btnText='hey there!'/>
    </>
  )
}

export default App
