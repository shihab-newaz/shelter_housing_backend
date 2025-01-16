// src/auth/controllers/auth.controller.ts
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dto/login.dto';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Admin login' })
  @ApiResponse({
    status: 200,
    description: 'Login successful',
    schema: {
      type: 'object',
      properties: {
        access_token: {
          type: 'string',
          example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        },
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const admin = await this.authService.validateAdmin(loginDto);
    return this.authService.login(admin);
  }

  @Post('register') 
  @ApiOperation({ summary: 'Create admin account (development only)' })
  @ApiResponse({ status: 201, description: 'Admin created successfully' })
  async register(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.register(createAdminDto);
  }
}
