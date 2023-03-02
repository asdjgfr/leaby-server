import { Controller, Req, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '@/entity/User.entity';
import { LocalAuthGuard } from '@/auth/local-auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    return this.authService.login(req.user as User);
  }
  @Post('register')
  async register(@Req() req: Request) {
    return this.authService.register(
      String(req.body.username),
      String(req.body.password),
      String(req.body.email),
    );
  }
}
