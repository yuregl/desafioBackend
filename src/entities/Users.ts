import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity("users")
class Users { 
  @PrimaryColumn()
  readonly id: number;

  @Column()
  email: string;

  @Column()
  senha: string;
}

export { Users }