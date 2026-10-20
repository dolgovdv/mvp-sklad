import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard.js';

@Controller('auth')
export class AuthController {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  @Post('google-sync')
  async syncUser(@Body() body: { email: string; name: string; avatar: string }) {
    const user = await this.prisma.user.upsert({
      where: { email: body.email },
      update: { name: body.name, avatar: body.avatar },
      create: { email: body.email, name: body.name, avatar: body.avatar },
    });

    const payload = { sub: user.id, email: user.email, name: user.name };
    const backendToken = this.jwtService.sign(payload);

    return { 
      success: true, 
      token: backendToken
    };
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return {
      message: 'Доступ разрешен! Данные получены из JWT токена бэкенда.',
      user: req.user,
    };
  }
}
