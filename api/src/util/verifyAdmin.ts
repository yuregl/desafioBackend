import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

async function isAdmin (request: Request, response: Response, next: NextFunction){
  const usersRepositories = getCustomRepository(UsersRepositories);
  const { user_id } = request.body;
  const { id } = request.query;

  const valueId = user_id === undefined ? id: user_id;

  const result = await usersRepositories.findOne({
    id: parseInt(valueId)
  });

  if(result?.isAdmin){
    return next();
  }

  return response.sendStatus(401)
}

export { isAdmin }