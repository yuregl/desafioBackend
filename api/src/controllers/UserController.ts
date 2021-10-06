import { UsersService } from '../services/UsersService';
import { Request, Response } from 'express';

class UserController {
  constructor(private userService: UsersService){}

  handleCreateUser = async(request: Request, response: Response) => {
    const { email, senha ,isAdmin = false } = request.body;

    const user = await this.userService.executeCreateUser({
      email, senha, isAdmin
    });
    
    if(user.email){
      return response.status(201).json({message: 'Criado com sucesso'})
    } else {
      return response.status(500).json({message: 'Internal Server Error'})
    }
  }

  handleLogin = async(request: Request, response: Response) => {
    const { email , senha } = request.body;
    const token = await this.userService.executeLogin({ email, senha });
    return response.json(token);
  }
}

export { UserController }