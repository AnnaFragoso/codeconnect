import Logo from './assets/Logo_small.svg';
import Feed from './assets/feed.svg';
import Account from './assets/account_circle.svg';
import Info from './assets/info.svg';
import Logout from './assets/logout.svg'
import './styles.css';

export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} />
      <nav>
        <ul className='lista-sidebar'>
          <li>
            <a href="#" className='item__link-publicacao'>Publicar</a>
          </li>
          <li>
            <a href="#" className='item_link'>
              <img src={Feed} />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#" className='item_link'>
              <img src={Account} />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className='item_link'>
              <img src={Info} />
              <span>Sobre nós</span>
            </a>
          </li>
          <li>
            <a href="#" className='item_link item__link--ativo'>
              <img src={Logout} />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}