import styled from "styled-components";

export const MainTitle = styled.h2`
  font-family: "Gilroy";
  font-weight: 700;
  font-size: 40px;
  color: #3a3a3a;
  margin-left: 490px;
  margin-top: 88px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 32px;

  /* display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 32px; */
`;

export const Item = styled.li`
  width: 285px;
  height: 446px;
  background: #f4f5f7;
`;

export const Img = styled.img``;

export const Title = styled.h3`
  font-family: "Gilroy";
  font-weight: 600;
  font-size: 24px;
  color: #3a3a3a;
  margin-top: 14px;
  padding-left: 12px;
`;

export const Btn = styled.button`
  border: 1px solid #e89f71;
  width: 245px;
  height: 48px;
  background: #fff;
  font-family: "Gilroy";
  font-weight: 600;
  font-size: 16px;
  color: #e89f71;
  margin-left: 490px;
  margin-top: 32px;
  margin-bottom: 44px;
`;

export const Text = styled.p`
  font-family: "Gilroy";
  font-weight: 500;
  font-size: 16px;
  color: #898989;
  margin-top: 12px;
  padding-left: 12px;
`;

export const Price = styled.p`
  font-family: "Gilroy";
  font-weight: 600;
  font-size: 20px;
  color: #3a3a3a;
  padding-left: 12px;
`;

export const OldPrice = styled.span`
  font-family: "Gilroy";
  font-weight: 400;
  font-size: 16px;
  color: #b0b0b0;
  margin-left: 16px;
`;

export const PriceWrap = styled.div`
  display: flex;
  align-items: center;

  margin-top: 12px;
`;
