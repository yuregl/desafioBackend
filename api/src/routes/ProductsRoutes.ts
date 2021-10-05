import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { ProductController } from '../controllers/ProductController';
import { ProductsRepositories } from '../repositories/ProductsRepositories';
import { ProductsService } from '../services/ProductsService';
import multer from 'multer';
import verifyAuth from '../util/AuthMiddlewae';
import validation from '../middleware/Validation';
import { ValidatorProductCreate } from '../Validators';

import saveImage from '../util/saveImage';

const routesProducts = Router();

function createProductsRouter(){
  const productsRespositories = getCustomRepository(ProductsRepositories);
  const productsService = new ProductsService(productsRespositories);
  const productsController = new ProductController(productsService);

  routesProducts.get('/products', verifyAuth ,productsController.handleListProducts);
  routesProducts.post('/products/new',
    multer(saveImage()).single('media'),
    validation(ValidatorProductCreate) ,
    productsController.handleCreateProduct);

  return routesProducts;
} 

export { createProductsRouter }