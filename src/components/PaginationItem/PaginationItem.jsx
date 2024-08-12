import { Wrap, ListWrap, Img, Text, Title, ListPhoto, ItemPhoto, BtnWrap, Btn, WrapBanner } from "./PaginationItem.styled";
import Couch from "../../Images/Couch.jpg";
import CouchLeft from "../../Images/CouchLeft.jpg";
import CouchRight from "../../Images/CouchRight.jpg";
import BtnLeft from "../../Images/Svg/BtnLeft.svg";
import BtnRight from "../../Images/Svg/BtnRight.svg";
import Container from "../Container/Container";
import Pagination from "./Pagination";
import Button from "../Button/Button";


const PaginationItem = () => {

    return (

        <Container>
        <Wrap>
            <ListWrap style={{
                    justifyContent: "flex-end",
                }}>
                    <Pagination />
                        <BtnWrap>
                        <Btn type="button">
                            <Img src={BtnLeft}
                                alt="BtnLeft"
                                width="48"
                                height="48"/>
                        </Btn>
                        <Btn type="button">
                            <Img src={BtnRight}
                                alt="BtnRight"
                                width="48"
                                height="48"/>
                        </Btn>
                    </BtnWrap>
            </ListWrap>
            <ListPhoto>
                <ItemPhoto>
                    <Img src={CouchLeft}
                         alt="CouchLeft"
                         maxWidth="374"
                         height="553" />
                </ItemPhoto>
                <ItemPhoto>
                    <Img src={Couch}
                         alt="Couch"
                         maxWidth="934"
                         height="553"/>
                </ItemPhoto>
                <ItemPhoto>
                    <Img src={CouchRight}
                         alt="CouchRight"
                         maxWidth="68"
                         height="553"/>
                </ItemPhoto>
            </ListPhoto>
                 <WrapBanner>
            <Title>High-Quality
                Furniture Just
                For You</Title>
            <Text>Our furniture is made from selected and best quality materials that are suitable for your dream home</Text>
           <Button type="button">Shop Now</Button>
        </WrapBanner>
        </Wrap>
    </Container>
)
}

export default PaginationItem;