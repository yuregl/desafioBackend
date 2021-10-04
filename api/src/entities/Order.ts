import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm'
import { Users } from './Users';

@Entity("orders")
class Orders {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column()
  note: string;

  @Column()
  user_id: number;

  @JoinColumn({name: "user_id"})
  @ManyToOne(()=> Users)
  user: Users

  @Column()
  price_total: number

  @CreateDateColumn()
  created_at: Date

};

export { Orders }