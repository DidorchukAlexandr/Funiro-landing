import { List, Item, Link, Img } from "./UserSection.styled";
import Heart from "../../Images/Svg/Heart.svg";
import Cart from "../../Images/Svg/Cart.svg";
import User from "../../Images/Svg/User.svg";

const UserSection = () => {
    return (
        
        <List>
            <Item>
                <Link>
                <Img src={Heart}
                         alt="Heart"
                         width="24"
                         height="24"/>
                </Link>
            </Item>
            <Item>
                <Link>
                <Img src={Cart}
                         alt="Cart"
                         width="24"
                         height="24"/>
                </Link>
            </Item>
            <Item>
                <Link>
                    <Img src={User}
                         alt="User"
                         width="40"
                         height="40"/>
                </Link>
            </Item>
    </List>

    )
}
export default UserSection;