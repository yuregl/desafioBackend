import { createConnection, getConnection, getCustomRepository } from "typeorm";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { Users } from "../entities/Users";
import { UsersService } from "../services/UsersService";
import { UsersRepositories } from '../repositories/UsersRepositories';

dotenv.config();

describe('Users Service', () => {

  beforeAll(() => {
    return createConnection({
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [Users],
      synchronize: true,
      logging: false,
    })
  })

  afterAll(() => {
    const connection = getConnection();
    return connection.close();
  })
  
  it('should create an user', async () => {
  
    const req = {
      email: 'teste@teste.com',
      senha: await bcrypt.hash('senha', 2),
      isAdmin: false
    };

    const userRepository = getCustomRepository(UsersRepositories);
    const userService = new UsersService(userRepository);

    const quantityBefore = await userRepository.count();
    const resultCreate = await userService.executeCreateUser(req);
    const quantityAfter = await userRepository.count();

    expect(quantityBefore).toBe(0);
    expect(quantityAfter).toBe(1);
    expect(resultCreate.email).toBe(req.email);

  });

  it('This test should fail when trying to create a user, which already exists.', async () => {

    const req = {
      email: 'teste@teste.com',
      senha: 'senha',
      isAdmin: false
    };

    const userRepository = getCustomRepository(UsersRepositories);
    const userService = new UsersService(userRepository);

    let result: string;

    try{
      await userService.executeCreateUser(req);
    } catch(error){
      expect((<Error>error).message).toBe('Usuário ja existe')
    }
  });

  it('This test must log in', async ()=> {
    const req = {
      email: 'teste@teste.com',
      senha: 'senha'
    }
    const userRepository = getCustomRepository(UsersRepositories);
    const userService = new UsersService(userRepository);

    const result = await userService.executeLogin(req);

    expect(result.email).toBe('teste@teste.com');
  });

  it('This test should verify that there is no user given the email given.', async() => {
    const req = {
      email: 'teste@test.com',
      senha: 'senha'
    }
    const userRepository = getCustomRepository(UsersRepositories);
    const userService = new UsersService(userRepository);

    try{
      await userService.executeLogin(req);
    } catch(error){
      expect((<Error>error).message).toBe('Esse email nao existe')
    }
  });

  it('This test should fail if the password passed is wrong.', async()=>{
    const req = {
      email: 'teste@teste.com',
      senha: 'senhateste'
    }
    const userRepository = getCustomRepository(UsersRepositories);
    const userService = new UsersService(userRepository);

    try{
      await userService.executeLogin(req);
    } catch(error){
      expect((<Error>error).message).toBe('Senha incorreta')
    }
  })

})