import Container from "../Container/Container";
import { List, Item, Img, Title, Text, Wrap } from "./AboutUs.styled";
import Trophy from "../../Images/Svg/Trophy.svg";
import Guarantee from "../../Images/Svg/Guarantee.svg"
import Shipping from "../../Images/Svg/Shipping.svg"
import CustomerSupport from "../../Images/Svg/CustomerSupport.svg"


const AboutUs = () => {
    return (
        <Container>
        <List>
                <Item>
                      <Img src={Trophy}
                         alt="Trophy"
                         width="40"
                        height="40" />
                    
                    <Wrap>
                        <Title>High Quality</Title>    
                        <Text>crafted from top materials</Text>
                </Wrap>
               </Item>
                <Item>
                    <Img src={Guarantee}
                         alt="Guarantee"
                         width="40"
                        height="40" />
                    
                    <Wrap>
                         <Title>Warrany Protection</Title>
                         <Text>Over 2 years</Text>
                   </Wrap>
            </Item>
                <Item>
                    <Img src={Shipping}
                         alt="Shipping"
                         width="40"
                         height="40"/>
                    <Wrap>
                        <Title>Free Shipping</Title>
                        <Text>Order over 150 $</Text>
                    </Wrap>
            </Item>
                <Item>
                    <Img src={CustomerSupport}
                         alt="CustomerSupport"
                         width="40"
                         height="40"/>
                    <Wrap>
                        <Title>24 / 7 Support</Title>
                        <Text>Dedicated support</Text>
                    </Wrap>
            </Item>
            </List>
            </Container>
    )

} 
export default AboutUs;