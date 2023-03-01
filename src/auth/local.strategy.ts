import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {
  Injectable,
  UnauthorizedException,
  NotAcceptableException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

type T = { username: string; password: string; reCAPTCHA: string } | null;

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ passReqToCallback: true });
  }
  async validate(
    req: Request,
    username: string,
    password: string,
  ): Promise<any> {
    const reCAPTCHA = await this.authService.validateCaptcha(
      (req.body as T)?.reCAPTCHA ?? '',
    );
    if (!reCAPTCHA.success || reCAPTCHA.scroll < 0.5) {
      throw new NotAcceptableException('人机验证不通过');
    }
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
