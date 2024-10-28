import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsEmail()
  email: string;

  @IsString({
    message: 'Password must be a string',
  })
  @MinLength(4)
  password: string;
}
