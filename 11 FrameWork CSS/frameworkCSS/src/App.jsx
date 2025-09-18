import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex align-middle justify-between'>
      <div className='w-40 h-40 bg-blue-500 flex flex-col items-center justify-center gap-10'>
        <div className='w-15 h-15 bg-orange-400'></div>
        <div className='w-15 h-15 bg-orange-400'></div>
      </div>

      <div className='w-40 h-40 bg-blue-500 flex flex-col items-center justify-center'>
        <div className='w-15 h-15 bg-orange-400'></div>
      </div>

      <div className='w-40 h-40 bg-blue-500 flex flex-col justify-between'>
        <div className='w-15 h-15 bg-orange-400'></div>
        <div className='w-15 h-15 bg-orange-400 self-end'></div>
      </div>

      <div className='w-40 h-40 bg-blue-500 flex items-center justify-center'>
        <div className='w-15 h-15 bg-orange-400 self-end'></div>
      </div>
    </div>

    <div className='flex align-middle justify-between'>

      <div className='w-40 h-40 bg-blue-500 flex items-center justify-center'>
        <div className='w-15 h-15 bg-orange-400 self-start'></div>  
      </div>

      <div className='w-40 h-40 bg-blue-500'>
        <div className='flex items-center justify-center'>
          <div className='w-15 h-15 bg-orange-400'></div>
        </div>

        <div className='flex justify-between'>
          <div className='w-15 h-15 bg-orange-400'></div>
          <div className='w-15 h-15 bg-orange-400'></div>
        </div>

        <div>
            <div className='w-15 h-15 bg-orange-400'></div>
        </div>


      </div>

      <div className='w-40 h-40 bg-blue-500 flex items-center justify-center'></div>

    </div>

    <div>

    </div>
    </>
  )
}

export default App
