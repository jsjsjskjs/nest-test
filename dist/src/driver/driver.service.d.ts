import { Driver } from 'src/entities/Driver';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';
import { MailerService } from '@nestjs-modules/mailer';
export declare class DriverService {
    private driverRepository;
    private authService;
    private mailerService;
    private logger;
    constructor(driverRepository: Repository<Driver>, authService: AuthService, mailerService: MailerService);
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
    findIdPhone(driverIdentity: string, driverPhone: string): Promise<{
        message: string;
        code: number;
        data: {
            driver_name: string;
        };
    }>;
    findIdEmail(driverIdentity: string, driverEmail: string): Promise<{
        message: string;
        code: number;
        data: {
            driver_name: string;
        };
    }>;
    findPwEmail(driverIdentity: string, driverName: string): Promise<{
        message: string;
        code: number;
    }>;
    findPwPhone(driverIdentity: string, driverName: string): Promise<{
        message: string;
        code: number;
    }>;
    generateRandomPassword(): Promise<string>;
    sendEmail(driverEmail: string, driverIdentity: string): Promise<boolean>;
    test(): Promise<void>;
}
