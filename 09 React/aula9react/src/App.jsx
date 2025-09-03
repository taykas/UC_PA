import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from "react-router-dom"
import { Home } from "./components/Home"

function App() {
  const [num, setNum] = useState(0)

  useEffect(() => {
    console.log("Quero ir pra casa")
  }, [num])

  return (
    <>
      {/* <button onClick={ () => setNum(num => num + 1)}>Incrementar</button>
      <h1>{num}</h1> */}

      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/sobre' element={<Sobre/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
