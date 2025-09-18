import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PagUser } from './pages/PagUser'
import { Produtos } from './pages/Produdos'
import { TipoUser } from './pages/TipoUser'
import { ListUsers } from './pages/ListUsers'
import { UserPage } from './pages/UserPage'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/PagUser/:userid' element={ <PagUser/> }></Route>
        <Route path='/produtos/:categoria/:id' element={ <Produtos/> }></Route>
        <Route path='/TipoUser/:id' element={ <TipoUser/> }></Route>
        <Route path='/UserPage' element={<UserPage />}></Route>
        <Route path='/ListUsers' element={<ListUsers />}></Route>
        <Route path='/ListUsers/:id' element={<UserPage />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App