 import { Router, Response, Request } from 'express';

 const routes = Router();

 routes.get('/teste', (_: Request, res: Response) => {
   res.send({message: 'teste'});
 });

export { routes };