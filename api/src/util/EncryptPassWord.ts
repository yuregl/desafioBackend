import bcrypt from 'bcrypt';

export async function hashPassword(senha: string):Promise<string>{
  const salt = parseInt(<string>process.env.SALT);
  return await bcrypt.hash(senha, salt);
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean>{
  return await bcrypt.compare(password, hashedPassword)
}