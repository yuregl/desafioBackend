import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";

export class CreateTableProductsOrder1633284875084 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.createTable(
        new Table({
          name: 'productsOrder',
          columns:[
            {
              name: "id",
              type: 'int',
              isPrimary: true,
              generationStrategy: 'increment',
              isGenerated: true
            },
            {
              name: "order_id",
              type: "int"
            },
            {
              name: "products_id",
              type: 'int',
              isNullable: false
            },
            {
              name: "quantity_products",
              type: 'int',
              isNullable: false
            }
          ],
          foreignKeys: [
            {
              name: "FKOrderProductsOrder",
              referencedTableName: "orders",
              referencedColumnNames: ["id"],
              columnNames: ["order_id"],
              onDelete:"CASCADE"
            },
            {
              name: "FKProductsProductsOrder",
              referencedTableName: "products",
              referencedColumnNames: ["id"],
              columnNames: ["products_id"],
              onDelete:"CASCADE"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
