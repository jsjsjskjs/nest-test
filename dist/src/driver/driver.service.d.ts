import { Driver } from 'src/entities/Driver';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';
export declare class DriverService {
    private driverRepository;
    private authService;
    private logger;
    constructor(driverRepository: Repository<Driver>, authService: AuthService);
    findDriver(driverName: string): Promise<Driver>;
    findDriverIdentity(driverIdentity: string): Promise<Driver>;
    signupDriver(driverName: string, driverPassword: string, driverIdentity: string, driverPhone: string, driverEmail: string): Promise<{
        message: string;
        code: number;
    }>;
    signinDriver(driverName: string, driverPassword: string): Promise<{
        message: string;
        code: number;
        data: {
            accessToken: string;
        };
    }>;
}
