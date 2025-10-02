import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function List() {
    const [cards, setCards] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getCards();
    }, [])

    const getCards = async () => {
        const response = await axios.get('https://tarotapi.dev/api/v1/cards')
        setCards(response.data.cards)
        console.log(response.data.cards)
    } 

    const openCards = (card) => {
        navigate('/show', {state: {card}})
    }

    return (
        <>
            <ul>
                {cards.map(card => (
                    <li
                        key={card.name_short}
                        onClick={() => openCards(card)}
                        style={{cursor: 'pointer', marginBottom: '8px'}}
                        >{card.value_int} - {card.name}</li>
                ))}
            </ul>
        </>
    )
}

export default List