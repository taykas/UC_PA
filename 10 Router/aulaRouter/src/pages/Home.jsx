import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <Link to={'/about'}>About</Link>
            <h1>Component Home</h1>
        </>
    )
}