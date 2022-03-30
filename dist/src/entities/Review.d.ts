import { CoreEntity } from "../common/entites/core.entity";
import { Menu } from "./Menu";
import { User } from "./User";
export declare class Review extends CoreEntity {
    review_id: number;
    rating: number | null;
    review_content: string | null;
    user_name: string | null;
    menu_name: string | null;
    extra: string | null;
    userName2: User;
    menuName2: Menu;
}
