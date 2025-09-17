import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PagUser } from './pages/PagUser'
import { Produtos } from './pages/Produdos'
import { TipoUser } from './pages/TipoUser'
import { User1 } from './pages/User1'
import { User2 } from './pages/User2'
import { User3 } from './pages/User3'
import { User4 } from './pages/User4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/PagUser/:userid' element={ <PagUser/> }></Route>
        <Route path='/produtos/:categoria/:id' element={ <Produtos/> }></Route>
        <Route path='/TipoUser/:id' element={ <TipoUser/> }></Route>
        <Route path='/User1' element={ <User1/> }></Route>
        <Route path='/User2' element={ <User2/> }></Route>
        <Route path='/User3' element={ <User3/> }></Route>
        <Route path='/User4' element={ <User4/> }></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App