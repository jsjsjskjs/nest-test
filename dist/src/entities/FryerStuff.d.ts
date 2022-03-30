import { CoreEntity } from '../common/entites/core.entity';
import { Truck } from './Truck';
export declare class FryerStuff extends CoreEntity {
    stuff_id: number;
    stuff1: number | null;
    stuff2: number | null;
    stuff3: number | null;
    truck_number: number | null;
    extra: string | null;
    truckNumber2: Truck;
}
