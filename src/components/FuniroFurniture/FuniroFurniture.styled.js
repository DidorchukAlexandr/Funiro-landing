import styled from "styled-components";

export const Wrap = styled.div`
  margin: 44px 0 0 480px;
`;

export const Text = styled.h3`
  font-family: "Gilroy";
  font-weight: 600;
  font-size: 20px;
  color: #616161;
  padding-left: 50px;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-family: "Gilroy";
  font-weight: 700;
  font-size: 40px;
  color: #3a3a3a;
`;

export const WrapList = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: auto auto auto;
  gap: 16px;
  margin-bottom: 87px;
`;

export const List1 = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  gap: 16px;

  grid-template-areas:
    "Item1 Item3"
    "Item2 Item4";
`;

export const List2 = styled.ul`
  display: grid;
  grid-template-columns: auto;
  align-content: center;
`;

export const List3 = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  gap: 16px;

  grid-template-areas:
    "Item7 Item9"
    "Item6 Item8";
`;

export const Item1 = styled.li`
  grid-area: Item1;
  align-content: end;
`;

export const Item2 = styled.li`
  grid-area: Item2;
`;

export const Item3 = styled.li`
  position: absolute;
  bottom: 0;
  right: 0;
  grid-area: Item3;
  align-content: end;
`;

export const Item4 = styled.li`
  grid-area: Item4;
`;

export const Item5 = styled.li``;

export const Item6 = styled.li`
  grid-area: Item6;
`;

export const Item7 = styled.li`
  grid-area: Item7;
  align-content: end;
`;

export const Item8 = styled.li`
  position: absolute;
  top: 0;
  right: 0;
  grid-area: Item8;
`;

export const Item9 = styled.li`
  grid-area: Item9;
  align-content: end;
`;

export const Img = styled.img``;
