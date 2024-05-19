import Code from './assets/code.svg';
import Chat from './assets/chat.svg';
import Share from './assets/share.svg';
import './styles.css';

export default function Card(id, imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamentos, comentarios, usuario) {
  return (
    <article className='card'>
      <div className='card__imagem'>
        <img src={imagemUrl} />
      </div>
      <div className='card__conteudo'>
        <div className='conteudo__texto'>
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>

        <div className='conteudo__rodape'>
          <ul>
            <li>
              <img src={Code} />
              {linhasDeCodigo}
            </li>
            <li>
              <img src={Share} />
              {compartilhamentos}
            </li>
            <li>
              <img src={Chat} />
              {comentarios}
            </li>
          </ul>

          <div className='rodape__usuario'>
            <img src={usuario.imagem} />
            {usuario.nome}
          </div>
        </div>
      </div>
    </article>
  )
}