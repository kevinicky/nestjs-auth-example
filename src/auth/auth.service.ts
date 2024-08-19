import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
  {
    id: 1,
    username: 'kevin',
    password: 'password',
  },
  {
    id: 2,
    username: 'nicky',
    password: 'password123',
  },
];

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  validateUser({ username, password }: AuthPayloadDto): string {
    const findUser = fakeUsers.find((user) => user.username == username);
    if (!findUser) {
      return null;
    }

    if (password == findUser.password) {
      const user = {
        id: findUser.id,
        username: username,
      };

      return this.jwtService.sign(user);
    }
  }
}
