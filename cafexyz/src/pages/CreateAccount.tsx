import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import '../styles/createAccount.scss'

import api from '../api/api';

export function CreateAccount() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function createAccount(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    const result =  await api.post("user/new", { email, senha });
    console.log(result);
    history.push('/')
  }

  function navigatetoHome() {
    history.push('/');
  }
  return(
    <div id="page-home">
      <main>
        <div className="main-content">
          <div id="name-title">Criar Conta</div>
          
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

            <div id="buttons">
              <Button 
                type="submit"
                onClick={() => createAccount }
              >
                Criar Conta
              </Button>

              <Button 
                type="button"
                onClick={navigatetoHome}
              >
                Voltar
              </Button>
            </div>
            
          </form>
        </div>
      </main>
    </div>
  );
}