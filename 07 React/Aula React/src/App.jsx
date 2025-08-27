import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { YellowSquare } from './components/YellowSquare';
import { RedSquare } from './components/RedSquare';
import { BlueSquare } from './components/BlueSquare';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <YellowSquare />
      <RedSquare />
      <BlueSquare />
    </>
  )
}

export default App
