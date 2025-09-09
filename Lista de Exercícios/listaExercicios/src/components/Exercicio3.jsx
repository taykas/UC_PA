import { useEffect, useState } from 'react'

export const Exercicio3 = () => {
    const [value, setValue] = useState(0)
    const [update, setUpdate] = useState(0)

    const UpdateValue = (event) => {
        setValue(event.target.value)
    }

    const SendValue = () => {
        setValue(value)
        setUpdate(value)
    }

    const SumValue = () => {
         setValue(value + 1)
    }

    const SubValue = () => {
         setValue(value - 1)
    }

    return(
        <div>
            <button onClick={SumValue}>+</button>
            <input type="number" value={value} onChange={UpdateValue}/>
            <button onClick={SubValue}>-</button>
            <h2>Agora o valor está em: {value}</h2>
        </div>
    )
}