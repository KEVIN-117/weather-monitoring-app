import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { hash, compare } from 'bcrypt';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(AuthService.name);
  constructor(private jwtService: JwtService) {
    super();
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Database connected');
  }
  async create(createAuthDto: CreateAuthDto) {
    const { password } = createAuthDto;
    const hashedPassword = await hash(password, 10);
    const userObj = { ...createAuthDto, password: hashedPassword };
    const user = await this.users.create({ data: userObj });
    const access_token = await this.createToken(createAuthDto, user.id);
    return {
      access_token,
      user,
    };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  async findOneByEmail(email: string) {
    console.log('email', email);
    const user = await this.users.findUnique({
      where: {
        email,
      },
    });
    console.log('user', user);
    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async login(user: LoginAuthDto) {
    try {
      const data = await this.findOneByEmail(user.email);
      if (!data.email) {
        return {
          message: 'Invalid credentials',
        };
      }
      const isPasswordValid = await compare(user.password, data.password);
      if (!isPasswordValid) {
        return { message: 'Invalid credentials' };
      }
      const access_token = await this.createToken(user, data.id);
      return {
        access_token,
      };
    } catch (error) {
      return {
        message: 'Invalid credentials',
        error,
      };
    }
  }

  async createToken(user: LoginAuthDto, id: string) {
    const payload = { username: user.email, sub: id, iat: Date.now() };
    const access_token = await this.jwtService.signAsync(payload, {
      algorithm: 'HS256',
    });
    const sessionObject = {
      user_id: id,
      token: access_token,
      expired_at: new Date(Date.now() + 1000 * 60 * 60 * 24),
      revoked_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    };
    await this.token.create({
      data: sessionObject,
    });
    return access_token;
  }
}
