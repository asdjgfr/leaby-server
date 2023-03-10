import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { Roles } from '@/role/roles.decorator';
import { Role } from '@/enums/role.enum';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
}
