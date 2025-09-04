import { useEffect, useState } from 'react'

export default function Exercicio4() {
    const [title, setTitle] = useState('')

    const UptadeTitle = (event) => {
        setTitle(event.target.value)
    }

    const SendValue = () => {
        document.title = title
    }

    return (
        <div>
            <p>O título atual da página é: {document.title}</p>
            <input type="text" value={title} onChange={UptadeTitle}/>
            <button onClick={SendValue}>Enviar novo Titulo</button>
        </div>
    )
}