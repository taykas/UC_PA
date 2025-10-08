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
        <div className='flex flex-col items-center'>
            <div className=''>
                <div className='w-[500px] '>
                    <h1 className='text-center p-2 mt-5 bg-blue-700 text-white font-bold'>{details.name}</h1>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='w-[500px] bg-gray-400/30 flex items-center justify-center gap-15 '>
                        <div className=''>
                            <img className='w-45' src={details.sprites.front_default} alt={details.name}/>

                            <div className='flex items-center justify-center mb-1'>
                                <p className='mr-5'>Altura: {details.height}</p>
                                <p>Peso: {details.weight}</p>
                            </div>
                        </div>

                        <div className='flex-col text-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <h3>Types:</h3>
                                <ul className='flex gap-2'>
                                {details.types.map(({ type }) => (
                                    <li key={type.name} className={`type-badge type-${type.name}`}>
                                    {type.name}
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <ul>
                                {details.stats.map(({ stat, base_stat }) => (
                                <li key={stat.name}>
                                {stat.name}: {base_stat}
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[500px] mt-15  bg-gray-400/30'>
                <h2 className='text-center p-2 bg-blue-700 text-white font-bold'>Habilidades</h2>
                <ul className='p-5'>
                    {abilitiesDetails.map(ability => {
                    // Pega a descrição em inglês (effect_entries pode estar vazio)
                    const effectEntry = ability.effect_entries.find(e => e.language.name === 'en')
                    return (
                    <li key={ability.id} style={{ marginBottom: '10px' }}>
                    <strong>{ability.name}</strong>
                    <p>{effectEntry ? effectEntry.effect : 'Descrição não disponível'}</p>
                    </li>
                    )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Show
