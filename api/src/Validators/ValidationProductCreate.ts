import { IsString, IsNotEmpty, IsNumber, IsDecimal } from 'class-validator';
import { Trim } from 'class-sanitizer';

export class ValidatorProductCreate{
  @IsString()
  @IsNotEmpty()
  @Trim()
  public nameProduct: string; 
  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '2'})
  public priceProduct: number;
}