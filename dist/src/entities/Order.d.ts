import { CoreEntity } from '../common/entites/core.entity';
import { Truck } from './Truck';
import { User } from './User';
export declare class Order extends CoreEntity {
    order_id: number;
    order_list: string | null;
    order_price: number | null;
    payment_time: string | null;
    delivery_time: string | null;
    order_cooking_time: string | null;
    delivery_info: boolean | null;
    order_payment_info: string | null;
    order_state: number | null;
    user_name: string | null;
    truck_number: number | null;
    extra: string | null;
    userName2: User;
    truckNumber2: Truck;
}
