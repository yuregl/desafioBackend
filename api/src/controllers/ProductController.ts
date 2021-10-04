import { ProductsService } from '../services/ProductsService';
import { Request, Response } from 'express';

class ProductController {
  
  constructor(private productService: ProductsService){}

  handleListProducts = async (request: Request, response: Response) => {
    const products = await this.productService.executelistProducts();
    return response.json(products);
  }

  handleCreateProduct = async (request: Request, response: Response) => {
    const {  nameProduct, priceProduct } = request.body;
    const product = await this.productService.executeCreateProducts({
      nameProduct, destination: request.destination, priceProduct
    }); 
    return response.json(product);
  }
}

export { ProductController }