import { useEffect, useState } from 'react'

export const Exercicio2 = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [counter, setCounter] = useState(0)
    const [value, setValue] = useState(0)
    const [finalvalue, setFinalValue] = useState(0)
    const [message, setMessage] = useState('')
    
    useEffect(() => {
        if (!isRunning) return

        const repeat = setInterval(() => {
            setCounter(prev => {
            if (prev > 0) {
                return prev - 1
            } else {
                setIsRunning(false)
                setMessage('O tempo esgotou!')
                return 0
            }
            })
        }, 1000)

        return () => clearInterval(repeat)
        }, [isRunning])

    const UpdateValue = (event) => {
        setValue(event.target.value)
    }

    const SendValue = () => {
        setFinalValue(value)
        setCounter(value)
        setMessage('')
    }

    const Counter = () => {
        if(counter > 0){
            setIsRunning(true)
            setMessage('')
        } else {
            setIsRunning(false)
            setMessage('O tempo esgotou!')
        }
    }

    return (
        <div>
            <input type="number" value={value} onChange={UpdateValue}/>
            <button onClick={SendValue}>Enviar</button>

            <p>Clique no botão para começar a contagem: </p>
            <button onClick={Counter}>Iniciar</button>
            <p>Contador: {counter}</p>  
            {message && <p>{message}</p>}
        </div>
    )
}