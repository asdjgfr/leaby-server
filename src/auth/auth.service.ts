import { Injectable } from '@nestjs/common';
import { UsersService } from '@/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@/entity/User.entity';
import { hexPassword } from '@/utils/crypto';
import configuration from '../../config/configuration';
import { PreconditionFailedException } from '@nestjs/common';
import {
  emailPattern,
  passwordPattern,
  usernamePattern,
} from '@/utils/validate';
import { isEmpty } from 'lodash';

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
    if (user && user.password === hexPassword(user.slat, password)) {
      return { ...user, password: undefined, isActive: undefined };
    }
    return null;
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign(user),
    };
  }
  async register(username: string, password: string, email: string) {
    let errMsg = '';
    switch (true) {
      case isEmpty(username):
        errMsg = '用户名不能为空';
        break;
      case isEmpty(password):
        errMsg = '密码不能为空';
        break;
      case isEmpty(email):
        errMsg = '邮箱不能为空';
        break;
      case !usernamePattern.test(username):
        errMsg = '用户名不符合规则';
        break;
      case !passwordPattern.test(password):
        errMsg = '密码不符合规则';
        break;
      case !emailPattern.test(email):
        errMsg = '邮箱不符合规则';
        break;
    }

    if (errMsg) {
      throw new PreconditionFailedException(errMsg);
    }

    let user = await this.usersService.findOne(username ?? '');
    if (user) {
      throw new PreconditionFailedException('用户名已存在');
    }
    user = await this.usersService.findOneByKey('email', email);
    if (user) {
      throw new PreconditionFailedException('邮箱已被注册');
    }
    await this.usersService.create({
      username: username,
      password: password,
      email: email,
    });
    return;
  }
}
