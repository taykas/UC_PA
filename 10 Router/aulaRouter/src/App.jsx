import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Profile } from './pages/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home /> }></Route>
        <Route path='/about' element={ <About/> }></Route>
        <Route path='/profile/:nome' element={ <Profile/> }></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App