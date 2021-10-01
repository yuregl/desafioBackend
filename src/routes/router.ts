import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { createProductsRouter } from './ProductsRoutes';

async function exportApp(){
  const app = express(); 
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());
  app.use(createProductsRouter());
  return app;
}

export { exportApp }