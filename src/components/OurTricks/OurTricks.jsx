import {
    Section,
    List,
    Item,
    Img,
    Wrap,
    Info,
    Data,
    Title,
    PaginationList,
    PaginationItem,
    BtnLeft,
    BtnRight,
 } from "./OurTricks.styled";
import Active from "../../Images/Svg/Active.svg";
import Ellipse from "../../Images/Svg/Ellipse.svg";
import Tricks1 from "../../Images/Tricks1.jpg";
import Tricks2 from "../../Images/Tricks2.jpg";
import Tricks3 from "../../Images/Tricks3.jpg";
import Container from "../Container/Container";
import BtnRightLight from "../../Images/Svg/BtnRightLight.svg";
import BtnLightLeft from "../../Images/Svg/BtnLightLeft.svg";

const items = [
    {
        img: Tricks1,
        info: "How to create a living room to love",
        data: "20 jan 2020"
    },
    {
        img: Tricks2,
        info: "Solution for clean look working space",
        data: "10 jan 2020"
    },
    {
        img: Tricks3,
        info: "Make your cooking activity more fun with good setup",
        data: "20 jan 2020"
        
    }
];

const elements = items.map((item, index) => {
    return (
        <Item key={index}>
            <Img src={item.img}
                     alt="Room1"
                     width="391"
                     height="251" />
            <Wrap>
                <Info>{item.info}</Info>
                <Data>{item.data}</Data>
            </Wrap>
        </Item>
    )
})

const OurTricks = () => {
    return (
        <Container>
            <Section>
            <Title>Tips & Tricks</Title>
            <List>
                {elements}
                </List>
                <BtnLeft>
                    <Img src={BtnLightLeft}
                         alt="BtnLightLeft"
                         width="24"
                         height="24"/>
                </BtnLeft>
                <BtnRight>
                    <Img src={BtnRightLight}
                         alt="BtnRightLight"
                         width="24"
                         height="24"/>
                </BtnRight>
                <PaginationList>
                <PaginationItem>
                    <Img src={Ellipse}
                            alt="Ellipse"
                            width="11"
                         height="11"
                          />
                </PaginationItem>
                <PaginationItem>
                    <Img src={Active}
                         alt="Active"
                         width="27"
                         height="27"/>
                </PaginationItem>
                <PaginationItem>
                    <Img src={Ellipse}
                         alt="Ellipse"
                         width="11"
                         height="11"/>
                </PaginationItem>
                    <PaginationItem style={{
                    marginRight: "0",
                }}>
                    <Img src={Ellipse}
                         alt="Ellipse"
                         width="11"
                         height="11"/>
               </PaginationItem>
        </PaginationList>
            </Section>
        </Container>
)
}
export default OurTricks;