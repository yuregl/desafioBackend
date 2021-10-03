import jwt from 'jsonwebtoken';

import { UsersRepositories } from '../repositories/UsersRepositories';
import { comparePassword } from '../util/EncryptPassWord';

interface IUser {
  email: string;
  senha: string;
}

class UsersService {
  constructor(private usersRepositories: UsersRepositories){}

  async executeCreateUser(req: IUser){
    const { email, senha } = req;
    
    const userAlreadyExist = await this.usersRepositories.findOne({
      email,
    });

    if(userAlreadyExist){
      throw new Error('Usuário ja existe');
    }

    const user = this.usersRepositories.create({
      email,
      senha
    })

    await this.usersRepositories.save(user);

    return user;
  }

  async executeLogin(req: IUser){
    const { email, senha } = req;

    const userAlreadyExist = await this.usersRepositories.findOne({
      email,
    })

    if(!userAlreadyExist){
      throw new Error('Esse email nao existe');
    }

    const password = await comparePassword(senha, userAlreadyExist.senha);
    if(!password){
      throw new Error('Senha incorreta');
    } 

    const token = jwt.sign({ email }, <string>process.env.SECRET, {expiresIn: '1d'});

    return token;
  }
}

export { UsersService }