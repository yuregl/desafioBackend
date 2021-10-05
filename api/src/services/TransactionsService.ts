import { TransactionsRepositories } from "../repositories/TransactionsRepositories";

interface ITransactions {
  card_number: string;
  order_id: number;
}

class TransactionsService {
  constructor(private transactionsRepositories: TransactionsRepositories){}
  
  async executeCreateTransactions(req: ITransactions) {
    const { card_number, order_id } = req;
    console.log(req)

    const transactions = this.transactionsRepositories.create({
      card_number,
      order_id,
    });

    return this.transactionsRepositories.save(transactions)
  }
}

export { TransactionsService }