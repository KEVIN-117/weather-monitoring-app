import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginAuthDto {
  @IsEmail()
  email: string;

  @IsString({
    message: 'Password must be a string',
  })
  @MinLength(4)
  password: string;
}
