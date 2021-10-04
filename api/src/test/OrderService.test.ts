import { createConnection, getConnection, getCustomRepository } from "typeorm";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { Orders } from "../entities/Order";
import { OrdersService } from "../services/OrdersService";
import { OrdersRepositories } from '../repositories/OrderRespositories';

import { Users } from "../entities/Users";
import { UsersService } from "../services/UsersService";
import { UsersRepositories } from '../repositories/UsersRepositories';

dotenv.config();

describe('Order Service', () => {
  beforeAll(async () => {

    return createConnection({
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [
        Orders,
        Users
      ],
      synchronize: true,
      logging: false,
    })
  })

  afterAll(() => {
    const connection = getConnection();
    return connection.close();
  })

  it('should create order', async () => {

    const requser = {
      email: 'teste@teste.com',
      senha: await bcrypt.hash('senha', 2),
      isAdmin: false
    };

    const userRepository = getCustomRepository(UsersRepositories);
    const userService = new UsersService(userRepository);
    await userService.executeCreateUser(requser);

    const orderRepository = getCustomRepository(OrdersRepositories);
    const orderService = new OrdersService(orderRepository);
    
    const req = {
      note: 'observação',
      user_id: 1,
      price_total: 46.74
    };

    const result = await orderService.executeCreateOrder(req);
    expect(result.id).toBe(1)
  });
});