import { useParams } from "react-router-dom"

export const Produtos = () => {
    const { categoria } = useParams();
    const { id } = useParams();

    return(
        <h1>Categoria: {categoria} - Produto: {id}</h1>
    );
}