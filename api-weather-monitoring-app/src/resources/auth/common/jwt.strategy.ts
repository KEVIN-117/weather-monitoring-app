import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'yourSecretKey', // Debe coincidir con la clave en JwtModule
    });
  }

  async validate(payload: {
    sub: string;
    username: string;
    iat: number;
    exp: number;
  }) {
    return { userId: payload.sub, username: payload.username };
  }
}
