import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

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
}

export { UsersService }