import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtAuthGuardTsGuard } from 'src/guards/jwt-auth.guard.ts/jwt-auth.guard.ts.guard';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ReqProfileDto } from './dto/req-profile.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() userObjectLogin: LoginAuthDto) {
    return this.authService.login(userObjectLogin);
  }

  @UseGuards(JwtAuthGuardTsGuard)
  @Get('profile')
  getProfile(@Request() req: ReqProfileDto) {
    console.log('req', req.user);
    return this.authService.findOneByEmail(req.user.username);
  }

  // @UseGuards(JwtAuthGuardTsGuard)
  // @Post('logout')
  // async logout(@Request() req: ReqProfileDto) {
  //   return this.authService.logout(req.user.username);
  // }

  @Post('register')
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
