import { Btn, MainTitle, List, Item, Img, Title, Text, Price, OldPrice, PriceWrap } from "./Products.styled";

import Product1 from "../../Images/Product1.jpg";
import Product2 from "../../Images/Product2.jpg";
import Product3 from "../../Images/Product3.jpg";
import Product4 from "../../Images/Product4.jpg";
import Product5 from "../../Images/Product5.jpg";
import Product6 from "../../Images/Product6.jpg";
import Product7 from "../../Images/Product7.jpg";
import Product8 from "../../Images/Product8.jpg";
import Container from "../Container/Container";


const items = [
  {
    img: Product1,
    title: "Syltherine",
    text: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
  },
  {
    img: Product2,
    title: "",
    text: "",
    price: "",
    oldPrice: "",
  },
  {
    img: Product3,
    title: "Lolito",
    text: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
  },
  {
    img: Product4,
    title: "Respira",
    text: "Minimalist fan",
    price: "Rp 500.000",
    oldPrice: "",
  },
  {
    img: Product5,
    title: "Grifo",
    text: "Night lamp",
    price: "Rp 1.500.000",
    oldPrice: "",
  },
  {
    img: Product6,
    title: "Muggo",
    text: "Small mug",
    price: "Rp 150.000",
    oldPrice: "",
  },
  {
    img: Product7,
    title: "Pingky",
    text: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
  },
  {
    img: Product8,
    title: "Potty",
    text: "Minimalist flower pot",
    price: "Rp 500.000",
    oldPrice: "",
  },
];

const elements = items.map((item, index) => {
  return (
    <Item key={index}>
      <Img src={item.img} />
      <Title>{item.title}</Title>
      <Text>{item.text}</Text>
          <PriceWrap>
              <Price>{item.price}</Price>
           <OldPrice>{item.oldPrice}</OldPrice>
      </PriceWrap>
    </Item>
  );
});

const Products = () => {
  return (
      <Container>
          <MainTitle>Our Products</MainTitle>
          <List>{elements}</List>
          <Btn type="button">Show More</Btn>
    </Container>
  );
};

export default Products;