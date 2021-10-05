import { OrdersService } from "../services/OrdersService";
import { ProductsOrderService } from "../services/ProductOrderService";
import { Request, Response } from "express";
import { TransactionsService } from "../services/TransactionsService";

interface IRequesrOrder {
  note: string,
  user_id: number,
  price_total: number,
  products: IProducts[],
  card_number: string,
}

interface IProducts {
  products_id: number,
  quantity_products: number,
}

class OrderController {
  constructor(
    private orderService: OrdersService,
    private productsOrderService: ProductsOrderService,
    private transactionsService: TransactionsService,
  ){}

  handleCreateOrder = async (request: Request, response: Response) => {
    const { note, user_id, price_total, products, card_number } = request.body as IRequesrOrder;
  
    const order = await this.orderService.executeCreateOrder({
      note,
      user_id,
      price_total
    });

    const { id } = order;

    const productsOrder = await this.productsOrderService.executeCreateProductOrder({
      order_id: id,
      products
    });

    const transactions = await this.transactionsService.executeCreateTransactions({
      order_id: id, card_number
    });

    console.log(transactions)

    return response.status(200).json({
      order,
      productsOrder,
      transactions
    })
  }
}

export { OrderController }