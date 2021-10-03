import { OrderController } from '../controllers/OrderController';
import { OrdersRepositories } from '../repositories/OrderRespositories';
import { ProductsOrderRepositories } from '../repositories/ProductsOrders';
import { OrdersService } from '../services/OrdersService';
import { ProductsOrderService } from '../services/ProductOrderService';
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

const routesOrder = Router();

function createOrderRoutes() {
  const orderRepositories =  getCustomRepository(OrdersRepositories);
  const orderService = new OrdersService(orderRepositories);

  const productsOrderRepositories =  getCustomRepository(ProductsOrderRepositories);
  const productsOrderService =  new ProductsOrderService(productsOrderRepositories);

  const productsController = new OrderController(orderService, productsOrderService)

  routesOrder.post('/order', productsController.handleCreateOrder);
  return routesOrder;
}

export { createOrderRoutes }