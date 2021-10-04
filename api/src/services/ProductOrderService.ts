import { ProductsOrderRepositories } from "@src/repositories/ProductsOrders";

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
    console.log(order_id);
    console.log(listOrder);


    return await this.productOrderRepositories.save(listOrder)
  }

}

export { ProductsOrderService }