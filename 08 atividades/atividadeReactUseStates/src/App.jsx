import { useState } from 'react';

function App() {
  const [visivel, setVisivel] = useState(true);
  const [cor, setCor] = useState("red");
  const [texto, setTexto] = useState("seila quero ir embora");

  function toggleVisibilidade() {
    setVisivel(prev => !prev);
  }

  function changeColor() {
    setCor(prev => (prev === "red" ? "blue" : "red"));
  }

  return (
    <>
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Digite o texto aqui"
      />

      <button onClick={toggleVisibilidade}>
        {visivel ? "Esconder Texto" : "Mostrar Texto"}
      </button>

      <button onClick={changeColor}>
        Mudar Cor
      </button>

      {visivel && (
        <div style={{ 
          backgroundColor: cor, 
          color: cor === "red" ? "white" : "yellow", 
          padding: "20px",
          marginTop: "10px",
          borderRadius: "8px"
        }}>
          <h1>{texto}</h1>
        </div>
      )}
    </>
  );
}

export default App;
