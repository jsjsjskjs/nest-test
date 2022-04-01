import { JwtService } from '@nestjs/jwt';
import { Driver } from 'src/entities/Driver';
import { Repository } from 'typeorm';
export declare class AuthService {
    private driverRepository;
    private jwtService;
    private logger;
    constructor(driverRepository: Repository<Driver>, jwtService: JwtService);
    findDriver(driverName: any): Promise<Driver>;
    sendAccessTokenDriver(driverName: any, driverPassword: any): Promise<{
        message: string;
        code: number;
        data: {
            accessToken: string;
        };
    }>;
}
