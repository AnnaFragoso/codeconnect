import { useState } from 'react';
import './styles.css'

export default function BarraDePesquisa() {
  const [termoPesquisa, setTermoPesquisa] = useState('');

  return (
    <input 
      type='search' 
      placeholder='Digite o que você procura' 
      className='barra_pesquisa' 
      value={termoPesquisa}
      onChange={(evento) => setTermoPesquisa(evento.target.value)}
    />
  );
}