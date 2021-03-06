import { DriverService } from './driver.service';
import { FindIdEmailDto } from './dto/findId-email.dto';
import { FindIdPhoneDto } from './dto/findId-phone.dto';
import { FindPwEmailDto } from './dto/findpw-email.dto';
import { FindPwPhoneDto } from './dto/findpw-phone.dto';
import { SigninDriverDto } from './dto/signin-driver.dto';
import { SignupDriverDto } from './dto/signup-driver.dto';
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    signupDriver(body: SignupDriverDto): Promise<{
        message: string;
        code: number;
    }>;
    signinDriver(body: SigninDriverDto): Promise<{
        message: string;
        code: number;
        data: {
            accessToken: string;
        };
    }>;
    findIdPhone(body: FindIdPhoneDto): Promise<{
        message: string;
        code: number;
        data: {
            driver_name: string;
        };
    }>;
    findIdEmail(body: FindIdEmailDto): Promise<{
        message: string;
        code: number;
        data: {
            driver_name: string;
        };
    }>;
    findPwPhone(body: FindPwPhoneDto): Promise<{
        message: string;
        code: number;
    }>;
    findPwEmail(body: FindPwEmailDto): Promise<{
        message: string;
        code: number;
    }>;
    test(): Promise<void>;
}
