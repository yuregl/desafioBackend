import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import '../styles/login.scss';

import api from '../api/api';

export function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function Login(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    try {
      const result = await api.post('login', {email, senha});
      console.log(result);
      // history.push('/');

    } catch(err){
      toast.error('Error', {
        position: 'top-center',
        autoClose: 5000,
      })
    }
  }

  return(
    <div id="page-home">
      <main>
        <div className="main-content">
        <div id="name-title">Café XYZ</div>
          
          <form>
            <input 
              type="text"
              placeholder="Email"
              onChange={(e) =>{setEmail(e.target.value)}}
              value={email}
            />
            <input 
              type="text"
              placeholder="Senha"
              onChange={(e) =>{setSenha(e.target.value)}}
              value={senha}
            />
            <p>
              <Link to="/account/new">Criar conta</Link>
            </p>
            <Button 
              type="submit"
              onClick={Login}
            >
              Fazer Login
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}