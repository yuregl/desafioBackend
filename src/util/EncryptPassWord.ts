import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express'

export async function hashPassword(request: Request, response: Response, next: NextFunction){
  const { senha } = request.body;
  const salt = parseInt(<string>process.env.SALT);
  request.password = await bcrypt.hash(senha, salt);
  next();
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean>{
  return await bcrypt.compare(password, hashedPassword)
}