import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [texto, setTexto] = useState("")

  return (
    <>
      <button className='teste' onClick={() => setCount((count) => count + 2)}> Count is {count}</button>
      <input type="text" onChange={(e) => setTexto(e.target.value)}/>
      <h1>{texto}</h1>
    </>
  )
}

export default App
