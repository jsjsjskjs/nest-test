import { CoreEntity } from '../common/entites/core.entity';
import { Order } from './Order';
import { Review } from './Review';
export declare class User extends CoreEntity {
    user_id: number;
    user_name: string;
    user_pw: string | null;
    user_phone: number | null;
    user_email: string | null;
    address: string | null;
    user_img: string | null;
    user_payment_info: string | null;
    extra: string | null;
    orders: Order[];
    reviews: Review[];
}
