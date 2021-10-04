import { EntityRepository, Repository }from 'typeorm';
import { ProductsOrder } from '../entities/ProductsOrder';

@EntityRepository(ProductsOrder)
class ProductsOrderRepositories extends Repository<ProductsOrder>{
}

export { ProductsOrderRepositories } 