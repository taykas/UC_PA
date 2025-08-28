import { useState } from 'react';
import './components/style.css'

function App() {
  const [ativo, setAtivo] = useState(false);
  const [texto, setTexto] = useState("");

  function toggle() {
    setAtivo(prev => !prev);
  }

  return (
    <>
      <input type="text" onChange={(e) => setTexto(e.target.value)}/>
      <button onClick={toggle}>Click</button>
      <h1 className={ativo ? 'hidden' : 'oi'}>{texto}</h1>

      <button onClick={toggle}>Click</button>
      <h1 className={ativo ? 'hidden' : 'oi'}>{texto}</h1>


    </>
  );
}

export default App;
