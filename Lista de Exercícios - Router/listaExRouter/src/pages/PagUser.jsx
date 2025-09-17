import { Link, useParams } from "react-router-dom";

export const PagUser = () => {
    const { userid } = useParams();
    
    return(
        <>
            <Link to={'/User1'}>User 1</Link> || <Link to={'/User2'}>User 2</Link> || <Link to={'/User3'}>User 3</Link>
            <h1>Usuário: {userid}</h1>
        </>
    )
}