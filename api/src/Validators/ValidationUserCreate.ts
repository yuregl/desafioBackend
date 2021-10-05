import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { Trim } from 'class-sanitizer';

export class ValidatorUserCreate{
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Trim()
  public email: string;
  @IsString()
  @IsNotEmpty()
  @Trim()
  @MinLength(6)
  @MaxLength(20)
  public senha: string;
}