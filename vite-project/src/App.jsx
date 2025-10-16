import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Show from './components/Show'
import List from './components/List'

function App() {
  return (
    <>
    <main className="h-screen bg-['bigimage.webp'] bg-cover bg-center bg-no-repeat">
       <header className='max-w-screen h-30 bg-red-700 align-middle justify-center'>
        <div className='flex items-center justify-around'>
          <img src="umbreon.png" alt="" width={100}/>
          <img src="bulbasaur.png" alt="" width={100}/>
          <img src="mewtwo.png" alt="" className='w-27'/>
          <img src="snorlax.png" alt=""width={95} />
          <img src="icon.png" alt="" width={250}/>
          <img src="charmander.png" alt="" width={100}/>
          <img src="pikachu.png" alt="" width={100}/>
          <img src="squirtle.png" alt="" className='w-30 h-23'/>
          <img src="sylveon.png" alt="" width={100}/>
        </div>
       </header>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<List/>}></Route>
            <Route path="/Show" element={<Show/>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
    </>
  )
}

export default App
