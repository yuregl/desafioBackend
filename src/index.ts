
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { routes } from './routes/router' 


const port = process.env.PORT;
const app = express();
app.use(routes);

app.listen(3000, () => {
  console.log(`Server is running in port http://localhost:${port}`)
})