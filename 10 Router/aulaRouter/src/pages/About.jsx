import { useNavigate } from "react-router-dom"

export const About = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        alert("TESTE")
        navigate('/')
    }

    return (
        <>
            <button onClick={handleNavigate}>Home</button>
            <h1>Component About</h1>
        </>
    )
}