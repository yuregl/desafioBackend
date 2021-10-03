import { OrdersRepositories } from "@src/repositories/OrderRespositories";

interface IOrder {
  note?: string;
  user_id: number;
  price_total: number;
}

class OrdersService {
  constructor(private orderRepositories: OrdersRepositories){}

  async executeCreateOrder(req: IOrder) {
    const { note, user_id, price_total } = req;
    if(!user_id || !price_total ){
      throw new Error('Paramêtros inválidos')
    }

    const order = this.orderRepositories.create({
      note,
      user_id,
      price_total
    })

    await this.orderRepositories.save(order);

    return order;
  }
}

export { OrdersService }