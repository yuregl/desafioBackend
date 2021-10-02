import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { ProductController } from '../controllers/ProductController';
import { ProductsRepositories } from '../repositories/ProductsRepositories';
import { ProductsService } from '../services/ProductsService';

const routesProducts = Router();

function createProductsRouter(){
  const productsRespositories = getCustomRepository(ProductsRepositories);
  const productsService = new ProductsService(productsRespositories);
  const productsController = new ProductController(productsService);

  routesProducts.get('/products', productsController.handleListProducts);
  routesProducts.post('/products', productsController.handleCreateProduct);

  return routesProducts;
} 

export { createProductsRouter }