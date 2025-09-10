import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [texto, setTexto] = useState("")
  const [visivel, setVisivel] = useState(true);

  function UpdateValue(event){
    setCount(event.target.value)
  }

  function SumValue(){
    setCount(count+1)
  }

  function SubValue(){
    setCount(count-1)
  }

  function Visibility() {
    setVisivel(prev => !prev);
  }

  return (
    <>
      <input type="text" onChange={(e) => setTexto(e.target.value)}/>
      <h1>{texto}</h1>

      <button onClick={SumValue}>+</button>
      <input type="number" name="count" id="count" value={count}/>
      <button onClick={SubValue}>-</button>
    </>
  )
}

export default App