import { useEffect, useState } from 'react'
import './Exercicio5.css'

export default function Exercicio5() {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const repeat = setInterval(() => {
            setIsActive(prev => !prev)
        }, 600)

        return () => clearInterval(repeat) 
    }, [])

    return (
        <div id='BlinkBlink' className={isActive ? 'teste' : ''}>
        </div>
    )
}