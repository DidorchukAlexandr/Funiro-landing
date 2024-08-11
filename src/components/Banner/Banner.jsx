import Button from "../Button/Button";
import { Wrap, Title, Text } from "./Banner.styled";

const Banner = () => {
    return (
        <Wrap>
            <Title>High-Quality
                Furniture Just
                For You</Title>
            <Text>Our furniture is made from selected and best quality materials that are suitable for your dream home</Text>
           <Button type="button">Shop Now</Button>
        </Wrap>
 )
}

export default Banner;