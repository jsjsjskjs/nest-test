import { CoreEntity } from '../common/entites/core.entity';
import { Truck } from './Truck';
export declare class Fryer extends CoreEntity {
    fryer_id: number;
    spot1: boolean | null;
    spot2: boolean | null;
    spot3: boolean | null;
    truck_number: number | null;
    extra: string | null;
    truckNumber2: Truck;
}
