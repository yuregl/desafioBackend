import "reflect-metadata";
import dotenv from 'dotenv';
import { startDatabase } from './database/index';
import { exportApp } from './routes/router';


dotenv.config();

async function start(){
  await startDatabase();
  const port = process.env.PORT;
  const app = await exportApp();


  app.listen(port, () => {
    console.log(`Server is running in port http://localhost:${port}`)
  })
}

start();



