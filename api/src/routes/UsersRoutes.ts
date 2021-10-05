import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserController } from '../controllers/UserController';
import { UsersService } from '../services/UsersService';
import { UsersRepositories } from '../repositories/UsersRepositories';
import validation from '../middleware/Validation';
import { ValidatorUserCreate, ValidatorUserLogin } from '../Validators';


const routesUser = Router();

function createUsersRoutes(){
  const usersRepositories = getCustomRepository(UsersRepositories);
  const usersService = new UsersService(usersRepositories);
  const usersController = new UserController(usersService);

  routesUser.post('/user/new', validation(ValidatorUserCreate) ,usersController.handleCreateUser);
  routesUser.post('/login', validation(ValidatorUserLogin), usersController.handleLogin);

  return routesUser;
}

export { createUsersRoutes }