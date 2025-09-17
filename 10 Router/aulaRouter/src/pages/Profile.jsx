import { useParams } from "react-router-dom";

export const Profile = () => {
    const { nome } = useParams();
    return(
        <h1>Perfil {nome}</h1>
    )
}