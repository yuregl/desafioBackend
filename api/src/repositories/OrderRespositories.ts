import { EntityRepository, Repository } from 'typeorm';
import { Orders } from '../entities/Order';

@EntityRepository(Orders)
class OrdersRepositories extends Repository<Orders>{
}

export { OrdersRepositories } 