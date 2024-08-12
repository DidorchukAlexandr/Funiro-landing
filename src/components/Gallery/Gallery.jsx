import {
    GallerySection,
    Container,
    TextWrap,
    Title,
    Text,
    Btn,
    GalleryWrap,
    ImgWrap,
    Img,
    Image,
    Wrap,
    ImgTextWrap,
    Span,
    SpanLine,
    ImgText,
    BtnSquare,
    PaginationImg,
    BtnSvg
 } from "./Gallery.styled";
import BtnSquareRight from "../../Images/Svg/BtnSquareRight.svg";
import BtnRightLight from "../../Images/Svg/BtnRightLight.svg";
import Line from "../../Images/Svg/Line.svg";
import Room1 from "../../Images/Room1.jpg";
import Room2 from "../../Images/Room2.jpg";
import Room3 from "../../Images/Room3.jpg";
import Pagination from "../PaginationItem/Pagination";


const Gallery = () => {
    return (
        <GallerySection >
             <Container>
                <Wrap>
                     <TextWrap>
                <Title>50+ Beautiful rooms 
                       inspiration
                </Title>
                <Text>Our designer already made a lot of beautiful <br/> prototipe of rooms that inspire you</Text>
                <Btn type="button">Explore More</Btn>
            </TextWrap>
            <GalleryWrap>
                <ImgWrap>
                    <Img src={Room1}
                         alt="Room1"
                         width="404"
                        height="582" />
                    <ImgTextWrap>
                        <Span>01<SpanLine>
                        <Img src={Line}
                         alt="Line"
                         width="27"
                         height="2" />
                        </SpanLine>Bed Room</Span>
                        <ImgText>
                            Inner Peace
                        </ImgText>        
                    </ImgTextWrap>
                    <BtnSquare>
                        <Img src={BtnSquareRight}
                         alt="BtnSquareRight"
                         width="48"
                        height="48" />
                    </BtnSquare>
                </ImgWrap>
                <PaginationImg>
                    <Image src={Room2}
                         alt="Room2"
                         width="372"
                        height="486" />
                    <BtnSvg>
                        <Img src={BtnRightLight}
                         alt="BtnRightLight"
                         width="24"
                        height="24" />
                    </BtnSvg>
                    <Pagination />
                </PaginationImg>
                    <Img src={Room3}
                            alt="Room3"
                            width="52"
                            height="486" />
               </GalleryWrap>
           </Wrap>
             </Container>
    </GallerySection>
      
)
}
export default Gallery;

