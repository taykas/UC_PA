import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Show from './components/Show'
import List from './components/List'

function App() {
  return (
    <>
    <header className='max-w-screen h-30 bg-purple-900'></header>
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
