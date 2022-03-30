import { Strategy } from 'passport-jwt';
import { Driver } from 'src/entities/Driver';
import { Repository } from 'typeorm';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private driverRepository;
    private logger;
    constructor(driverRepository: Repository<Driver>);
    validate(payload: any, done: CallableFunction): Promise<Driver>;
}
export {};
