import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("products")
class Products {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  nameProduct: string;

  @Column()
  imageUri: string;

  @Column()
  quantity: number;

  @Column("decimal", { precision: 2})
  priceProduct: number;
}

export { Products }