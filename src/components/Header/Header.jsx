import { HeaderWrap, Wrap, Logo, Nav, List, Item, Link, Img} from "./Header.styled";
import Container from "../Container/Container";
import Search from "../Search/Search";
import ArrowDown from "../../Images/Svg/ArrowDown.svg";
import PaginationItem from "../PaginationItem/PaginationItem";
import UserSection from "../UserSection/UserSection";

const Header = () => {
    return (
        
        <HeaderWrap>
            <Container>
                <Wrap>
                    <Logo>Funiro.</Logo>
                        <Nav>
                            <List>
                                <Item>
                                <Link>Products
                                    <Img src={ArrowDown}
                                          alt="ArrowDown"
                                          width="20"
                                          height="20"/>
                                </Link>
                                </Item>
                                <Item>
                                <Link>Rooms
                                    <Img src={ArrowDown}
                                         alt="ArrowDown"
                                         width="20"
                                         height="20"/>
                                </Link>
                                </Item>
                                <Item>
                                    <Link>Inspirations</Link>
                                </Item>
                            </List>
                        </Nav>
                    <Search />
                    <UserSection />
                </Wrap>
            </Container>
            <PaginationItem />
        </HeaderWrap>
)
}

export default Header;

