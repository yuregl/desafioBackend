import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("products")
class Products {

  @PrimaryColumn()
  readonly id: number;

  @Column()
  nameProduct: string;

  @Column()
  imageUri: string;

  @Column("decimal", { precision: 2})
  priceProduct: number;
}

export { Products }