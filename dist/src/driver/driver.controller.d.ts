import { DriverService } from './driver.service';
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
}
