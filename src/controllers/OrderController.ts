import { OrdersService } from "../services/OrdersService";
import { ProductsOrderService } from "../services/ProductOrderService";
import { Request, Response } from "express";

interface IRequesrOrder {
  note: string,
  user_id: number,
  price_total: number,
  products: IProducts[],
}

interface IProducts {
  products_id: number;
  quantity_products: number;
}

class OrderController {
  constructor(
    private orderService: OrdersService,
    private productsOrderService: ProductsOrderService
  ){}

  handleCreateOrder = async (request: Request, response: Response) => {
    const { note, user_id, price_total, products } = request.body as IRequesrOrder;
    
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

    return response.status(200).json({
      order,
      productsOrder
    })
  }
}

export { OrderController }