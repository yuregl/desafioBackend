import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableOrder1633282157602 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true
          },
          {
            name: 'note',
            type: 'varchar'
          },
          {
            name: "user_id",
            type: "int"
          },
          {
            name: "price_total",
            type: "float"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          }

        ],
        foreignKeys: [
          {
            name: "FKUserOrder",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete:"CASCADE"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('orders')
  }

}
