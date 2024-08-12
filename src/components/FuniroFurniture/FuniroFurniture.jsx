import {
    List1, List2, List3, Img, Text, Title, Wrap, WrapList,
    Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Item9,
    } from "./FuniroFurniture.styled";
import Furniture1 from "../../Images/Furniture1.jpg";
import Furniture2 from "../../Images/Furniture2.jpg";
import Furniture3 from "../../Images/Furniture3.jpg";
import Furniture4 from "../../Images/Furniture4.jpg";
import Furniture5 from "../../Images/Furniture5.jpg";
import Furniture6 from "../../Images/Furniture6.jpg";
import Furniture7 from "../../Images/Furniture7.jpg";
import Furniture8 from "../../Images/Furniture8.jpg";
import Furniture9 from "../../Images/Furniture9.jpg";
import Container from "../Container/Container";

const FuniroFurniture = () => {
    return (
     <>
            <Container>
                <Wrap>
                <Text>Share your setup with</Text>
                <Title>#FuniroFurniture</Title>
                </Wrap>
            </Container>
            <Container>
     <WrapList> 
        <List1>   
            <Item1>
             <Img src={Furniture1}
                     alt="Room1"
                     width="204"
                     height="382" />
            </Item1>
            <Item2>
            <Img src={Furniture2}
                     alt="Room2"
                     width="311"
                     height="323" />
            </Item2>
            <Item3>
            <Img src={Furniture3}
                     alt="Room3"
                     width="451"
                     height="312" />
            </Item3>
            <Item4>
            <Img src={Furniture4}
                     alt="Room4"
                     width="344"
                     height="242" />
            </Item4>
        </List1>
        <List2>
            <Item5>
            <Img src={Furniture5}
                     alt="Room5"
                     width="295"
                     height="392" />
            </Item5>
        </List2>
        <List3>
                    
            <Item6>
            <Img src={Furniture6}
                     alt="Room1"
                     width="178"
                     height="242" />
            </Item6>
            <Item7>
            <Img src={Furniture7}
                     alt="Room7"
                     width="290"
                     height="348" />
            </Item7>      
                        <Item8>
            <Img src={Furniture8}
                     alt="Room8"
                     width="258"
                     height="196" />
            </Item8>
            <Item9>
            <Img src={Furniture9}
                     alt="Room9"
                     width="146"
                     height="433" />
                 </Item9>
        </List3>
                </WrapList> 
                </Container>
    </>
        
)
}
export default FuniroFurniture;