import {
    FooterWrap,
    ContactWrap,
    Title,
    Text,
    Link,
    MenuWrap,
    List,
    Item,
    AccountWrap,
    SocialWrap,
    Conect,
    Forma,
    Input,
    Btn,
    Img,
} from "./Footer.styled";
import Pin from "../../Images/Svg/Pin.svg";
import Phone from "../../Images/Svg/Phone.svg";
import SendFile from "../../Images/Svg/SendFile.svg";
import Container from "../Container/Container";

const Footer = () => {
    return (
        <Container>
            <FooterWrap>
            <ContactWrap>
                <Title>Funiro.</Title>
                    <Text>Worldwide furniture store since <br></br>
                        2020. We sell over 1000+ branded <br></br>
                        products on our website</Text>
                    <Text>
                        <Link>
                   <Img src={Pin}
                         alt="Pin"
                         width="20"
                        height="20" />
                            Sawojajar Malang, Indonesia
                    </Link>
                    </Text>
                <Text><Link>
                        <Img src={Phone}
                         alt="Phone "
                         width="20"
                        height="20" />
                    +6289 456 3455</Link></Text>
                <Text><Link>www.funiro.com</Link></Text>
            </ContactWrap>
            <MenuWrap>
                <Title>Menu</Title>
                <List>
                    <Item><Link>Products</Link></Item>
                    <Item><Link>Rooms</Link></Item>
                    <Item><Link>Inspirations</Link></Item>
                    <Item><Link>About Us</Link></Item>
                    <Item><Link>Terms & Policy</Link></Item>
                </List>
            </MenuWrap>
            <AccountWrap>
                <Title>Account</Title>
                <List>
                    <Item><Link>My Account</Link></Item>
                    <Item><Link>Checkout</Link></Item>
                    <Item><Link>My Cart</Link></Item>
                    <Item><Link>My catalog</Link></Item>
                </List>
            </AccountWrap>
            <SocialWrap>
                <Title>Stay Connected</Title>
                <List>
                    <Item><Link>Facebook</Link></Item>
                    <Item><Link>Instagram</Link></Item>
                    <Item><Link>Twitter</Link></Item>
                </List>
                </SocialWrap>
                <Conect>
                    <Title>Stay Updated</Title>
                    <Forma>
                        <Input type='text'
                placeholder='Enter your email'/>
                        <Btn>
                            <Img src={SendFile}
                         alt="SendFile"
                         width="24"
                        height="24" />
                        </Btn>
                    </Forma>
                </Conect>
            </FooterWrap>
    </Container>
)
}
export default Footer;