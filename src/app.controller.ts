import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get('test/:id')
  getHello(): string {
    return this.appService.getHello();
  }
}
