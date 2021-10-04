import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableProdutos1632877580626 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'nameProduct',
            type: 'varchar',
          },
          {
            name: 'ImageUri',
            type: 'varchar',
          },
          {
            name: 'priceProduct',
            type: 'float',
          },
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true
          }
        ] 
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
