import { useEffect, useState } from 'react'

export default function Exercicio1() {
  const [timer, setTimer] = useState(Date.now())

  useEffect(() => {
    const repeat = setInterval(() => {
      setTimer(Date.now())
    }, 1000)

    return () => clearInterval(repeat)
  }, [])

  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString()
  }

  return (
    <div
      style={{
        backgroundColor: '#8F67A1',
        color: 'white',
        borderRadius: '10px',
        padding: '15px',
      }}
    >
      <h1>Contador: {formatTime(timer)}</h1>
    </div>
  )
}
