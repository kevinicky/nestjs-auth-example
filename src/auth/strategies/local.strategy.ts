import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  validate(username: string, password: string): string {
    console.log('inside local strategy');
    const user = this.authService.validateUser({ username, password });
    if (!user) {
      throw new UnauthorizedException('invalid credentials');
    }

    return user;
  }
}
