import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Exercicio1 } from './components/Exercicio1'
import { Exercicio2 } from './components/Exercicio2'
import { Exercicio3 } from './components/Exercicio3'
import { Exercicio4 } from './components/Exercicio4'
import { Exercicio5 } from './components/Exercicio5'
import { Exercicio6 } from './components/Exercicio6'

function App() {
  return (
    <>
      <Router>
      <nav>
        <Link to="/">Exercicio 1</Link> | <Link to="/Exercicio2">Exercicio 2</Link> | <Link to="/Exercicio3">Exercicio 3</Link> | <Link to="/Exercicio4">Exercicio 4</Link> | <Link to="/Exercicio5">Exercicio 5</Link> | <Link to="/Exercicio6">Exercicio 6</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Exercicio1 />} />
        <Route path="/Exercicio2" element={<Exercicio2 />} />
        <Route path="/Exercicio3" element={<Exercicio3 />} />
        <Route path="/Exercicio4" element={<Exercicio4 />} />
        <Route path="/Exercicio5" element={<Exercicio5 />} />
        <Route path="/Exercicio6" element={<Exercicio6 />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
