import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableUser1633201628676 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns:[
            {
              name: 'email',
              type: 'varchar',
            },
            {
              name: 'senha',
              type: 'varchar',
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
      await queryRunner.dropTable('users');
    }

}
