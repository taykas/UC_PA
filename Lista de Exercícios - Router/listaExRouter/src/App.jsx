import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PagUser } from './pages/PagUser'
import { Produtos } from './pages/Produdos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/PagUser/:userid' element={ <PagUser/> }></Route>
        <Route path='/produtos/:categoria/:id' element={ <Produtos/> }></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App