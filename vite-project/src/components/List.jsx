import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function List() {
    const [cards, setCards] = useState([])
    const [nextUrl, setNextUrl] = useState(null)
    const [previousUrl, setPreviousUrl] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getCards('https://pokeapi.co/api/v2/pokemon')
    }, [])

    const getCards = async (url) => {
        const response = await axios.get(url)
        setCards(response.data.results)
        setNextUrl(response.data.next)
        setPreviousUrl(response.data.previous)
    }

    const getIdFromUrl = (url) => {
        const parts = url.split('/')
        return parts[parts.length - 2]
    }

    const openCards = (card) => {
        navigate('/show', { state: { card } })
    }

    return (
        <div className="flex flex-col items-center p-8">
            <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 w-300">
                {cards.map(card => {
                    const id = getIdFromUrl(card.url)
                    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

                    return (
                        
                        <li
                            key={id}
                            onClick={() => openCards(card)}
                            className="flex flex-col items-center bg-gray-100 p-3 rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform"
                        >
                            <img
                                src={imageUrl}
                                alt={card.name}
                                className="w-25 h-25 mb-2"
                            />
                            <span className="text-lg font-semibold capitalize">
                                {card.name}
                            </span>
                        </li>
                    )
                })}
            </ul>

            <div className="flex gap-4 mt-6">
                <button
                    onClick={() => getCards(previousUrl)}
                    disabled={!previousUrl}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
                >
                    Previous
                </button>

                <button
                    onClick={() => getCards(nextUrl)}
                    disabled={!nextUrl}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
                >
                    Próximo
                </button>
            </div>
        </div>
    )
}

export default List
