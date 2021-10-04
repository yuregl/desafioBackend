import { ProductsRepositories } from "../repositories/ProductsRepositories";

interface IProductRequest {
  nameProduct: string;
  destination: string;
  priceProduct: number;
}

class ProductsService {

  constructor(private productsRespositories: ProductsRepositories){}

  async executelistProducts() {
    const products = this.productsRespositories.find();
    return products;
  }

  async executeCreateProducts(req: IProductRequest) {
    const { nameProduct, destination, priceProduct} = req;
    const productAlreadyExist = await this.productsRespositories.findOne({
      nameProduct
    });

    if(productAlreadyExist) {
      throw new Error('Produto já existe');
    }

    const product = this.productsRespositories.create({
      nameProduct,
      imageUri: destination,
      priceProduct
    });
    
    
    return await this.productsRespositories.save(product);
  }
}

export { ProductsService }