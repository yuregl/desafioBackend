import { TransactionsService } from "../services/TransactionsService";
import { Request, Response } from 'express';

class TransactionsController { 
  constructor(private transactionsService: TransactionsService){}

  handleGetTransactions = async(request: Request, response: Response) => {
    const transactions = await this.transactionsService.executeGetAllTranscations();
    return response.json(transactions);
  }
}

export { TransactionsController }