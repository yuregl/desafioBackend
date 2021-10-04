import { createConnection, getConnection, getCustomRepository } from "typeorm";
import dotenv from 'dotenv';

import { ProductsOrder } from "../entities/ProductsOrder";
import { ProductsOrderService } from "../services/ProductOrderService";
import { ProductsOrderRepositories } from '../repositories/ProductsOrdersRepositories';

import { Users } from "../entities/Users";
import { UsersService } from "../services/UsersService";
import { UsersRepositories } from '../repositories/UsersRepositories';

import { Products } from "../entities/Products";
import { ProductsService } from "../services/ProductsService";
import { ProductsRepositories } from '../repositories/ProductsRepositories';

import { Orders } from "../entities/Order";
import { OrdersService } from "../services/OrdersService";
import { OrdersRepositories } from '../repositories/OrderRespositories';

dotenv.config();

describe('Products Order Service', () => {
  beforeAll(() => {
    return createConnection({
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [
        Users,
        Products,
        Orders,
        ProductsOrder
      ],
      synchronize: true,
      logging: false,
    })
  })

  afterAll(() => {
    const connection = getConnection();
    return connection.close();
  })

  it('should create Product Order Service',  async () => {
    const reqUser = {
      email: 'teste@teste.com',
      senha: 'senha',
      isAdmin: false
    };

    const userRepository = getCustomRepository(UsersRepositories);
    const userService = new UsersService(userRepository);

    await userService.executeCreateUser(reqUser);

    const reqProduct = {
      nameProduct: 'café',
      destination: 'teste/teste',
      priceProduct: 5.70
    }

    const productsRepository = getCustomRepository(ProductsRepositories);
    const productsService = new ProductsService(productsRepository);

    await productsService.executeCreateProducts(reqProduct);

    const reqOrder = {
      note: 'observação',
      user_id: 1,
      price_total: 46.74
    };

    const orderRepository = getCustomRepository(OrdersRepositories);
    const orderService = new OrdersService(orderRepository);
    
    await orderService.executeCreateOrder(reqOrder);
  
    const req = {
      order_id: 1,
      products: [{
        products_id: 1,
        quantity_products: 10,
      }]
    }

    const produtcsOrderRepositories = getCustomRepository(ProductsOrderRepositories);
    const productsOrderService = new ProductsOrderService(produtcsOrderRepositories);

    const result = await productsOrderService.executeCreateProductOrder(req);
    expect(result.length).toBe(1)
  });
})