import { Strategy } from 'passport-jwt';
import { Driver } from 'src/entities/Driver';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private driverRepository;
    private userRepository;
    private logger;
    constructor(driverRepository: Repository<Driver>, userRepository: Repository<User>);
    validate(payload: any, done: CallableFunction): Promise<User | Driver>;
}
export {};
