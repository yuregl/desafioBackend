import { UsersService } from '../services/UsersService';
import { Request, Response } from 'express';

class UserController {
  constructor(private userService: UsersService){}

  handleCreateUser = async(request: Request, response: Response) => {
    const { email } = request.body;

    const user = await this.userService.executeCreateUser({
      email, senha: request.password
    });
    return response.json(user);
  }
}

export { UserController }