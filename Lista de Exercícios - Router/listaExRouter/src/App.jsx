import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PagUser } from './pages/PagUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/profile/:userid' element={ <PagUser/> }></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App