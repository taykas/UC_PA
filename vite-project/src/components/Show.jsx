import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Show() {
    const location = useLocation()
    const { card } = location.state || {}

    const [details, setDetails] = useState(null)
    const [abilitiesDetails, setAbilitiesDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!card) return

    const fetchData = async () => {
        try {
        setLoading(true)
        setError(null)

        // Busca os detalhes do Pokémon
        const response = await axios.get(card.url)
        setDetails(response.data)

        // Busca os detalhes das habilidades
        const abilities = response.data.abilities

        const abilitiesPromises = abilities.map(async (abilityItem) => {
        const res = await axios.get(abilityItem.ability.url)
        return res.data
        })

        const abilitiesData = await Promise.all(abilitiesPromises)
        setAbilitiesDetails(abilitiesData)

        } catch (err) {
        setError('Erro ao carregar os dados.')
        } finally {
        setLoading(false)
        }
    }

    fetchData()}, [card])

    if (!card) return <p>Card não encontrado.</p>
    if (loading) return <p>Carregando...</p>
    if (error) return <p>{error}</p>

    return (
          <>
          <div className='flex items-center justify-center'>
            <div className='mt-30 flex flex-col items-center justify-center bg-gray-100 p-3 rounded-xl shadow-md w-250 overflow-scroll overflow-x-hidden'>
                <h1 className='text-2xl font-bold capitalize'>{details.name}</h1>
                <div className='flex items-center justify-center'>
                    <div className='flex-col text-center'>
                        <img className='w-60' src={details.sprites.front_default} alt={details.name}/>
                        <div className='flex items-center justify-center gap-5'>
                            <p>Height: {details.height}</p>
                            <p>Weight: {details.weight}</p>
                        </div>
                    </div>
                    <div className='flex-col align-top justify-self-start'>
                        <h1 className=''>Stats:</h1>
                        <ul>
                            {details.stats.map(({ stat, base_stat }) => (
                            <li key={stat.name}>
                                {stat.name}: {base_stat}
                            </li>
                            ))}
                        </ul> 
                    </div>
                </div>

                

                <h3>Types:</h3>
                <ul className='flex gap-5'>
                    {details.types.map(({ type }) => (
                        <li key={type.name} className={`type-badge type-${type.name}`}>
                        {type.name}
                        </li>
                    ))}
                </ul>

                <h2>Habilidades</h2>
                <ul>
                    {abilitiesDetails.map(ability => {
                    // Pega a descrição em inglês (effect_entries pode estar vazio)
                    const effectEntry = ability.effect_entries.find(e => e.language.name === 'en')
                    return (
                    <li key={ability.id}>
                        <strong>{ability.name}</strong>
                        <p>{effectEntry ? effectEntry.effect : 'Descrição não disponível'}</p>
                    </li>
                    )
                    })}
                </ul>
            </div>
          </div>
            </>
    )
}

export default Show
