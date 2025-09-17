import { useParams } from "react-router-dom";

export const PagUser = () => {
    const { userid } = useParams();
    
    return(
        <h1>Usuário: {userid}</h1>
    )
}