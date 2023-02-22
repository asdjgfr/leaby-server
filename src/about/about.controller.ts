import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { Roles } from '@/role/roles.decorator';
import { Role } from '@/enums/role.enum';
import { AboutService } from './about.service';
import { RolesGuard } from '@/role/roles.guard';
import type { SysInfo } from '@/types/about';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('info')
  @Roles(...Object.values(Role))
  getSysInfo(): SysInfo {
    return this.aboutService.getSysInfo();
  }
}
