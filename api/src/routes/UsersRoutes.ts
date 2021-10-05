import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserController } from '../controllers/UserController';
import { UsersService } from '../services/UsersService';
import { UsersRepositories } from '../repositories/UsersRepositories';

const routesUser = Router();

function createUsersRoutes(){
  const usersRepositories = getCustomRepository(UsersRepositories);
  const usersService = new UsersService(usersRepositories);
  const usersController = new UserController(usersService);

  routesUser.post('/user/new', usersController.handleCreateUser);
  routesUser.post('/login', usersController.handleLogin);

  return routesUser;
}

export { createUsersRoutes }