import { createConnection, getConnection, getCustomRepository } from "typeorm";
import dotenv from 'dotenv';
import { Products } from "../entities/Products";
import { ProductsService } from "../services/ProductsService";
import { ProductsRepositories } from '../repositories/ProductsRepositories';

dotenv.config();

describe('Products Service', () => {
  beforeAll(() => {
    return createConnection({
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [Products],
      synchronize: true,
      logging: false,
    })
  })

  afterAll(() => {
    const connection = getConnection();
    return connection.close();
  })

  it('should create a product', async () => {
    const productsRepository = getCustomRepository(ProductsRepositories);
    const productsService = new ProductsService(productsRepository);

    const req = {
      nameProduct: 'café',
      destination: 'teste/teste',
      priceProduct: 5.70
    }

    const result = await productsService.executeCreateProducts(req); 
   
    expect(result.nameProduct).toBe('café')
  });

  it('This test should fail for trying to add a product that is already saved.', async () => {
    const productsRepository = getCustomRepository(ProductsRepositories);
    const productsService = new ProductsService(productsRepository);

    const req = {
      nameProduct: 'café',
      destination: 'teste/teste',
      priceProduct: 5.70
    }

    try{
      await productsService.executeCreateProducts(req); 
    } catch(error){
      expect((<Error>error).message).toBe('Produto já existe')
    }
 
  });

  it('This test should list the saved products.', async () => {
    const productsRepository = getCustomRepository(ProductsRepositories);
    const productsService = new ProductsService(productsRepository);

    const result = await productsService.executelistProducts();
    expect(result.length).toBe(1)
  })
})