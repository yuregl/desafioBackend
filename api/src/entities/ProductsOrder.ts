import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Orders } from "./Order";
import { Products } from "./Products";

@Entity("productsOrder")
class ProductsOrder {
  @PrimaryColumn()
  readonly id: number;

  @Column()
  order_id: number;

  @JoinColumn({name: "order_id"})
  @ManyToOne(()=> Orders)
  order: Orders

  @Column()
  products_id: number

  @JoinColumn({name: "products_id"})
  @OneToOne(() => Products)
  product: Products;


  @Column()
  quantity_products: number;
}

export { ProductsOrder }