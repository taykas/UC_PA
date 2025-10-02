import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Show from './components/Show'
import List from './components/List'
import tailwindcss from '@tailwindcss/vite'

function App() {
  return (
    <>
    <header className='w-40 h-40'></header>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<List/>}></Route>
            <Route path="/Show" element={<Show/>}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
