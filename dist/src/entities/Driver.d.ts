import { CoreEntity } from '../common/entites/core.entity';
import { Truck } from './Truck';
export declare class Driver extends CoreEntity {
    driver_id: number;
    driver_name: string;
    driver_pw: string | null;
    driver_identity: string;
    driver_phone: string | null;
    driver_email: string | null;
    extra: string | null;
    trucks: Truck[];
}
