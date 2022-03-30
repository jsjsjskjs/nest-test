import { CoreEntity } from '../common/entites/core.entity';
import { Review } from './Review';
import { Truck } from './Truck';
export declare class Menu extends CoreEntity {
    menu_id: number;
    menu_name: string;
    menu_price: number | null;
    menu_cooking_time: number | null;
    menu_content: string | null;
    origin: string | null;
    truck_category: string | null;
    user_name: string | null;
    extra: string | null;
    reviews: Review[];
    truckCategory2: Truck;
}
