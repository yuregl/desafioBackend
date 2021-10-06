import dotenv from 'dotenv';

import { Users } from "../../entities/Users";
import { createConnection, ConnectionOptions } from "typeorm";
import { UsersRepositories } from '../../repositories/UsersRepositories';
import { hashPassword } from '../../util/EncryptPassWord';

dotenv.config()

const options = {
  name: 'default',
  type: process.env.TYPEORM_CONNECTION,
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
} as ConnectionOptions;

async function run() {
  const connection = await createConnection(options)
  const usersRepositories = connection.getCustomRepository(UsersRepositories);
  const passwordEcrypted = await hashPassword('teste1');
  await usersRepositories.save({
    email: 'teste@admin.com',
    senha: passwordEcrypted,
    isAdmin: true,
  });
}

run();