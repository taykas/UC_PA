import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const TipoUser = () => {
    const [tipo, setTipo] = useState('');
    const { id } = useParams();

    useEffect(() => {
        if (id == 1) {
            setTipo('Admin');
        } else {
            setTipo('Usuário comum');
        }
    }, [id]);

    return <h1>{tipo}</h1>;
};
