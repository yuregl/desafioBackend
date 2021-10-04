import { ProductsOrderRepositories } from "../repositories/ProductsOrdersRepositories";

interface IProducts {
  products_id: number;
  quantity_products: number;
}

interface IProductsOrders {
  order_id: number;
  products: IProducts[];
}

class ProductsOrderService {

  constructor(private productOrderRepositories: ProductsOrderRepositories){}

  async executeCreateProductOrder(req: IProductsOrders){
    const { order_id, products } = req;
    const listOrder = products.map(element => {
      const orderProducts = this.productOrderRepositories.create({
        order_id,
        products_id: element.products_id,
        quantity_products: element.quantity_products
      })
      return orderProducts;
    });

    return await this.productOrderRepositories.save(listOrder)
  }

}

export { ProductsOrderService }