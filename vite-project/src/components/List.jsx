import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function List() {
    const [cards, setCards] = useState([])
    const [nextUrl, setNextUrl] = useState(null)
    const [previousUrl, setPrevioutUrl] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getCards('https://pokeapi.co/api/v2/pokemon');
    }, [])

    const getCards = async (url) => {
        const response = await axios.get(url)
        setCards(response.data.results)
        setNextUrl(response.data.next)
        setPrevioutUrl(response.data.previous)
    } 

    const getIdFromUrl = (url) => {
        const parts = url.split('/')
        return parts[parts.length - 2]
    }

    const openCards = (card) => {
        navigate('/show', {state: {card}})
    }

    return (
        <>
        <div className='h-screen'>
            <ul>
                {cards.map(card => (
                    <li
                        key={getIdFromUrl(card.url)}
                        onClick={() => openCards(card)}
                        style={{cursor: 'pointer', marginBottom: '8px'}}
                        >{card.name} - {card.name}</li>
                ))}
            </ul>
            <button onClick={() => getCards(previousUrl)}>Previous</button>
            <button onClick={() => getCards(nextUrl)}>Prox</button>
        </div>
        </>
    )
}

export default List