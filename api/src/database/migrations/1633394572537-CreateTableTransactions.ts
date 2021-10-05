import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableTransactions1633394572537 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'transactions',
          columns: [
            {
              name: "id",
              type: 'int',
              isPrimary: true,
              generationStrategy: 'increment',
              isGenerated: true
            },
            {
              name: 'card_number',
              type: 'varchar',
            },
            {
              name: 'order_id',
              type: 'int'
            },
            {
              name: 'created_at',
              type: "timestamp",
              default: "now()"
            }
          ],
          foreignKeys: [
            {
              name: "FKOrderTransactions",
              referencedTableName: "orders",
              referencedColumnNames: ["id"],
              columnNames: ["order_id"],
              onDelete:"CASCADE"
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('transactions');
    }
}
