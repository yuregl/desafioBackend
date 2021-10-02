import { Request, Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserController } from '../controllers/UserController';
import { UsersService } from '../services/UsersService';
import { UsersRepositories } from '../repositories/UsersRepositories';

import { hashPassword } from '../util/EncryptPassWord';

const routesUser = Router();

function createUsersRoutes(){
  const usersRepositories = getCustomRepository(UsersRepositories);
  const usersService = new UsersService(usersRepositories);
  const usersController = new UserController(usersService);

  routesUser.post('/create_user', hashPassword ,usersController.handleCreateUser);

  return routesUser;
}

export { createUsersRoutes }