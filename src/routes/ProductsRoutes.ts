import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { ProductController } from '../controllers/ProductController';
import { ProductsRepositories } from '../repositories/ProductsRepositories';
import { ProductsService } from '../services/ProductsService';
import multer from 'multer';
import verifyAuth from '../util/AuthMiddlewae';



import saveImage from '../util/saveImage';
import { verify } from 'jsonwebtoken';

const routesProducts = Router();

function createProductsRouter(){
  const productsRespositories = getCustomRepository(ProductsRepositories);
  const productsService = new ProductsService(productsRespositories);
  const productsController = new ProductController(productsService);

  routesProducts.get('/products', verifyAuth ,productsController.handleListProducts);
  routesProducts.post('/products', 
    multer(saveImage()).single('media'),
    productsController.handleCreateProduct);

  return routesProducts;
} 

export { createProductsRouter }