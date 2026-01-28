import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(email: string, password: string) {
    // Explicitly type the user object
    const user = await this.prisma.user.findUnique({
      where: { email },
    }) as { id: number; email: string; password: string; role: string } | null;

    if (!user) throw new UnauthorizedException();

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) throw new UnauthorizedException();

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error('JWT_SECRET is not set');

    const token = jwt.sign({ id: user.id, role: user.role }, secret);

    return { token };
  }
}
