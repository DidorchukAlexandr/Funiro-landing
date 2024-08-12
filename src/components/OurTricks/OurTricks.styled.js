import styled from "styled-components";

export const Section = styled.section`
  position: relative;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 35px;
  & > li:nth-child(2) {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const Item = styled.li``;

export const Title = styled.h2`
  font-family: "Gilroy";
  font-weight: 700;
  font-size: 40px;
  color: #3a3a3a;
  margin: 44px 0 32px 535px;
`;

export const Img = styled.img``;

export const Wrap = styled.div`
  padding: 16px;
`;

export const Info = styled.h3`
  font-family: "Gilroy";
  font-weight: 600;
  font-size: 24px;
  color: #3a3a3a;
  margin-bottom: 10px;
`;

export const Data = styled.p`
  font-family: "Gilroy";
  font-weight: 400;
  font-size: 14px;
  color: #898989;
`;

export const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const PaginationItem = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

export const BtnLeft = styled.button`
  position: absolute;
  top: 240px;
  left: -25px;
  border: none;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnRight = styled.button`
  position: absolute;
  top: 240px;
  right: -20px;
  border: none;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
