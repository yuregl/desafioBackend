import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../components/Button';
import axios ,{  AxiosError } from 'axios';
import { validInputs } from '../utils/validInputs';
import '../styles/createAccount.scss'

import api from '../api/api';

interface IClientError {
  error: string;
}

export function CreateAccount() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleAxiosError(err: AxiosError<IClientError>): string | undefined {
    return err?.response?.data?.error;
  }

  async function createAccount(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try{
      const result = validInputs({ email, senha });
      console.log(result)
      if(result) {
        await api.post("users/new", { email, senha });
        toast.success('Criado com sucesso', {
          position: 'top-center',
          autoClose: 5000,
        });
        history.push('/')
      } else {
        toast.error('Entradas inválidas', {
          position: 'top-center',
          autoClose: 5000,
        });
      }
     
    }catch(err: any| AxiosError){
      if(axios.isAxiosError(err)){
        const result = handleAxiosError(err)
        toast.error(result, {
          position: 'top-center',
          autoClose: 5000,
        });
      }
    }
  }


  function navigatetoHome() {
    history.push('/');
  }
  return(
    <div id="page-home">
      <main>
        <div className="main-content">
          <div id="name-title">Criar Conta</div>
          
          <form onSubmit={createAccount} >
            <input 
              type="text"
              placeholder="Email"
              onChange={(e) =>{setEmail(e.target.value)}}
              value={email}
            />
            <input 
              type="password"
              placeholder="Senha"
              onChange={(e) =>{setSenha(e.target.value)}}
              value={senha}
            />

            <div id="buttons">
              <Button 
                type="submit"
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