import { Link } from 'react-router-dom'

export const ListUsers = () => {
    const users = [1, 2, 3, 4, 5];

    return(
        <div>
            <h2>Lista de Usuários</h2>
            <ul>
                {users.map((id) => (
                    <li key={id}>
                        <Link to={`/ListUsers/${id}`}>Usuário {id}</Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}