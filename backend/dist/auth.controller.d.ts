import { PrismaService } from './prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthController {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    syncUser(body: {
        email: string;
        name: string;
        avatar: string;
    }): Promise<{
        success: boolean;
        token: string;
    }>;
    getProfile(req: any): {
        message: string;
        user: any;
    };
}
