import {useLocation} from 'react-router-dom'

function Show() {
    const location = useLocation()
    const {card: card} = location.state || {}

    if (!card) return <p>Card not found</p>

    return (
        <div>
            <h2>character Profile</h2>
            <p>Name: {card.name}</p>
            <p>Description: {card.desc}</p>
            <p>Meaning: {card.meaning_rev}</p>
        </div>
    )
}

export default Show