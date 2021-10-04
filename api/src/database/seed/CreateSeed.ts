import { Users } from "../../entities/Users";
import { createConnection, getCustomRepository } from "typeorm";
import { UsersRepositories } from '../../repositories/UsersRepositories';
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const options: MysqlConnectionOptions  = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: parseInt(<string>process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [
    Users
  ],
  synchronize: false,
  logging: process.env.TYPEORM_LOGGING === 'true',
};


async function run() {
  const connection = await createConnection(options)
  const usersRepositories = connection.getCustomRepository(UsersRepositories);
  await usersRepositories.save({
    email: 'teste@admin.com',
    senha: 'testeSenha',
    isAdmin: true,
  });
}

run();