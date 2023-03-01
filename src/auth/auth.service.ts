import { Injectable } from '@nestjs/common';
import { UsersService } from '@/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@/entity/User.entity';
import { hexPassword } from '@/utils/crypto';
import configuration from '../../config/configuration';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateCaptcha(token: string) {
    const body = new URLSearchParams();
    body.append('secret', configuration.recaptcha);
    body.append('response', token);
    return await fetch(
      `https://www.recaptcha.net/recaptcha/api/siteverify?secret=${configuration.recaptcha}&response=${token}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body,
      },
    ).then((res) => res.json());
  }
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === (await hexPassword(user.slat, password))) {
      return { ...user, password: undefined, isActive: undefined };
    }
    return null;
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
