import jwt from 'jsonwebtoken';

import { hashPassword } from '../util/EncryptPassWord'; 
import { UsersRepositories } from '../repositories/UsersRepositories';
import { comparePassword } from '../util/EncryptPassWord';

interface IUser {
  email: string;
  senha: string;
  isAdmin?: boolean;
}

class UsersService {
  constructor(private usersRepositories: UsersRepositories){}

  async executeCreateUser(req: IUser){
    const { email, senha, isAdmin } = req;
    
    const userAlreadyExist = await this.usersRepositories.findOne({
      email,
    });

    if(userAlreadyExist){
      throw new Error('Usuário ja existe');
    }

    const user = this.usersRepositories.create({
      email,
      senha: await hashPassword(senha),
      isAdmin
    });

    return await this.usersRepositories.save(user);
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

    const userWithToken ={
      email,
      id: userAlreadyExist.id,
      token
    }

    return userWithToken;
  }
}

export { UsersService }