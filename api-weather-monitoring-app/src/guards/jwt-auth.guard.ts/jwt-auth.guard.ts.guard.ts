import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { envs } from '../../config';

@Injectable()
export class JwtAuthGuardTsGuard implements CanActivate {
  constructor(private jsonWebToken: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(req);
    if (!token) {
      throw new UnauthorizedException('Token not found');
    }
    try {
      const payload = await this.jsonWebToken.verifyAsync(token, {
        secret: envs.TOKEN_SECRET,
      });

      req.user = payload;
    } catch (error) {
      console.log('error', error);
      throw new UnauthorizedException('Invalid token');
    }
    return true;
  }

  extractTokenFromHeader(req: Request): string | undefined {
    const [type, token] = req.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
