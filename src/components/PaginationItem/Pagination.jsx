import { List, Item, Img, } from "./PaginationItem.styled";
import Active from "../../Images/Svg/Active.svg";
import Ellipse from "../../Images/Svg/Ellipse.svg";


const Pagination = () => {
    return (
        <List>
                <Item>
                    <Img src={Active}
                         alt="Active"
                         width="27"
                         height="27" />
                </Item>
                <Item>
                    <Img src={Ellipse}
                         alt="Ellipse"
                         width="11"
                         height="11"/>
                </Item>
                <Item>
                    <Img src={Ellipse}
                         alt="Ellipse"
                         width="11"
                         height="11"/>
                </Item>
                    <Item style={{
                    marginRight: "0",
                }}>
                    <Img src={Ellipse}
                         alt="Ellipse"
                         width="11"
                         height="11"/>
               </Item>
        </List>
)
}
export default Pagination;