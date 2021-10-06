import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import '../styles/home.scss';

import api from '../api/api';

export function Home() {

  return(
    <div id="page-home">
      <main>
        <div className="main-content">
        <div id="name-title">Café XYZ</div>
          
          <form>
            <input 
              type="text"
              placeholder="Email"
            />
            <input 
              type="text"
              placeholder="Senha"
            />
            <p>
              <Link to="/account/new">Criar conta</Link>
            </p>
            <Button type="submit">
              Fazer Login
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}