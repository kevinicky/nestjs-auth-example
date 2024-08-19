import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request): Express.User {
    return req.user;
  }

  @Get('status')
  @UseGuards(JwtGuard)
  status(@Req() req: Request): Express.User {
    console.log('inside auth controller status method', req.user);
    return req.user;
  }
}
