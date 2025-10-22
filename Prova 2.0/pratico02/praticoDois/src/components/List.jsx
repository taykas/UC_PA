import { useEffect, useState } from 'react'
import axios from 'axios'

function List() {
    const [user, setUser] = useState({})
    const [endereco, setEndereco] = useState([])
    const [habilidades, setHabilidades] = useState([])
    const [projetos, setProjetos] = useState([])

    useEffect(() => {
        getUserData();
        getUserEndereco();
        getUserHabilidades();
        getUserProjetos();
    }, [])

    const getUserData = async () => {
        const response = await axios.get("https://avaliacao-bosch.onrender.com/usuario")
        setUser(response.data)
        console.log(response.data)
    }

    const getUserEndereco = async () => {
        const response = await axios.get("https://avaliacao-bosch.onrender.com/usuario")
        setEndereco(response.data.endereco)
        console.log(response.data.endereco)
    }

    const getUserHabilidades = async () => {
        const response = await axios.get("https://avaliacao-bosch.onrender.com/usuario")
        setHabilidades(response.data.habilidades)
        console.log(response.data.habilidades)
    }

    const getUserProjetos = async () => {
        const response = await axios.get("https://avaliacao-bosch.onrender.com/usuario")
        setProjetos(response.data.projetos)
        console.log(response.data.projetos)
    }

    return (
        <>
        <main className='flex align-middle justify-center mt-60'>
            <div className='flex align-middle justify-center bg-blue-600 w-250 h-120 gap-15'>
                    <div className='flex-row text-white align-middle justify-center'>
                        <div className='h-50 w-50 bg-white rounded-full mt-15 mb-7 flex items-center justify-center'></div>
                        <h1 className='text-4xl'>{user.nome} - {user.idade}</h1>
                        <h3>{user.email}</h3>
                        <p>Endereço: {endereco.rua} {endereco.numero}, {endereco.cidade} - {endereco.estado}</p>
                    </div>
                <div className='flex items-center justify-center'>
                    <div className='flex-row items-center '>
                        <div className='mb-15 bg-white rounded-2xl p-5 w-100'>
                            <h1 className='text-2xl'>Habilidades</h1>
                            <div className='flex-col'>
                                <p>- {habilidades[0]}</p>
                                <p>- {habilidades[1]}</p>
                                <p>- {habilidades[2]}</p>
                                <p>- {habilidades[3]}</p>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl p-5'>
                            <h1 className='text-2xl'>Projetos</h1>
                            <ol>
                                {projetos.map(projeto => (
                                    <li key={projeto.id}>
                                        {projeto.nome} - {projeto.status}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}
export default List