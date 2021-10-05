import { EntityRepository, Repository } from 'typeorm';
import { Transactions } from '../entities/Transactions';

@EntityRepository(Transactions)
class TransactionsRepositories extends Repository<Transactions>{
}

export { TransactionsRepositories } 