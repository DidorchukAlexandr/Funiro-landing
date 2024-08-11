import { List, Item, Img, Text, Title, Wrap } from "./FuniroFurniture.styled";
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

// const items = [Furniture1, Furniture2, Furniture3, Furniture4, Furniture5,
//     Furniture6, Furniture7, Furniture8, Furniture9];

// const elements = items.map((item, idx) => {
//     return (
//         <Item key={idx}>
//             <Img src={item} />
//         </Item>
//     )
// })    


const FuniroFurniture = () => {
    return (
        <>
            <Container>
                <Wrap>
                <Text>Share your setup with</Text>
                <Title>#FuniroFurniture</Title>
                </Wrap>
            </Container>
            
        <List>
            <Item>
             <Img src={Furniture1}
                     alt="Room1"
                     width="204"
                     height="382" />
            </Item>
            <Item>
            <Img src={Furniture2}
                     alt="Room1"
                     width="311"
                     height="323" />
            </Item>
            <Item>
            <Img src={Furniture3}
                     alt="Room1"
                     width="451"
                     height="312" />
            </Item>
            <Item>
            <Img src={Furniture4}
                     alt="Room1"
                     width="344"
                     height="242" />
            </Item>
            <Item>
            <Img src={Furniture5}
                     alt="Room1"
                     width="295"
                     height="392" />
            </Item>
            <Item>
            <Img src={Furniture6}
                     alt="Room1"
                     width="178"
                     height="242" />
            </Item>
            <Item>
            <Img src={Furniture7}
                     alt="Room1"
                     width="290"
                     height="348" />
            </Item>
            <Item>
            <Img src={Furniture8}
                     alt="Room1"
                     width="258"
                     height="196" />
            </Item>
            <Item>
            <Img src={Furniture9}
                     alt="Room1"
                     width="146"
                     height="433" />
                 </Item>
        </List>
        </>
        
)
}
export default FuniroFurniture;