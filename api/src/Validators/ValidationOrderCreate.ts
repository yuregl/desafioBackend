import { IsString, IsNotEmpty, IsArray,IsInt, IsNumber } from 'class-validator';
import { Trim } from 'class-sanitizer';

export class ValidatorOrderCreate{
  @IsString()
  @IsNotEmpty()
  @Trim()
  public note: string; 

  @IsNotEmpty()
  @IsInt()
  public user_id: number;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2})
  public price_total: number;

  @IsNotEmpty()
  @IsArray()
  public products: object[];  
}