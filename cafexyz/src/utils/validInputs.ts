interface ICreateUser {
  email: string;
  senha: string;
}

function validInputs({email, senha}: ICreateUser){
  const regex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/g
  const match = regex.exec(email);
  const passwordLength = senha.length >= 6 ? true: false;

  if(match && passwordLength){
    return true;
  }
  return false;
}

export {
  validInputs
}