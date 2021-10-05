import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, OneToOne } from 'typeorm'
import { Orders } from './Order'

@Entity("transactions")
class Transactions {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column()
  card_number: string;

  @Column()
  order_id: number;

  @JoinColumn({name: "order_id"})
  @OneToOne(()=> Orders)
  order: Orders

  @CreateDateColumn()
  created_at: Date

};

export { Transactions }