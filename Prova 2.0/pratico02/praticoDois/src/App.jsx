import { useState } from 'react'
import './App.css'
import axios from "axios"
import List from './components/List'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<List/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
