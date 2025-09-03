import { useState } from 'react'
import './App.css'
import { YellowSquare } from './components/YellowSquare';
import { RedSquare } from './components/RedSquare';
import { BlueSquare } from './components/BlueSquare';
import { Square } from './components/Square';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Square classe="blue"/>
      <Square classe="yellow"/>
      <Square classe="red"/>
    </>
  )
}

export default App
