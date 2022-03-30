import { Fryer } from './Fryer';
import { Order } from './Order';
import { Wok } from './Wok';
import { WokStuff } from './WokStuff';
import { FryerStuff } from './FryerStuff';
import { Menu } from './Menu';
import { Driver } from './Driver';
import { CoreEntity } from '../common/entites/core.entity';
export declare class Truck extends CoreEntity {
    truck_id: number;
    truck_number: number;
    location: string | null;
    truck_category: string;
    condition: boolean | null;
    driver_name: string | null;
    extra: string | null;
    orders: Order[];
    woks: Wok[];
    wokStuffs: WokStuff[];
    fryers: Fryer[];
    fryerStuffs: FryerStuff[];
    menus: Menu[];
    driverName2: Driver;
}
