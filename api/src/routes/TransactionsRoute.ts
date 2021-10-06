import { Router } from "express";
import { TransactionsRepositories } from "../repositories/TransactionsRepositories";
import { TransactionsService } from "../services/TransactionsService";
import { TransactionsController } from "../controllers/TransactiosController";
import { getCustomRepository } from "typeorm";
import verifyAuth from '../util/AuthMiddlewae';
import { isAdmin } from '../util/verifyAdmin';

const orderTransactions = Router();

function createTransactionsRoutes() {
  const transactionsRepositories = getCustomRepository(TransactionsRepositories);
  const transactionsService = new TransactionsService(transactionsRepositories);
  const transactionsController = new TransactionsController(transactionsService);

  orderTransactions.get('/transactions/list', isAdmin, verifyAuth, transactionsController.handleGetTransactions);
  return orderTransactions;
}

export { createTransactionsRoutes }