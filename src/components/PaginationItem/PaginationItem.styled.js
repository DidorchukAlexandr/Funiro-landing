import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
`;

export const WrapList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ListWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 32px 0;
`;

export const Item = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Img = styled.img``;

export const ListPhoto = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemPhoto = styled.li`
  margin-right: 32px;
  &:last-child {
    margin-right: 0;
  }
`;

export const BtnWrap = styled.div`
  margin-left: 490px;
`;

export const Btn = styled.button`
  border: none;
  background: #fcf8f3;
`;

export const WrapBanner = styled.div`
  position: absolute;
  z-index: 1;
  top: 25px;
  left: 0;
  backdrop-filter: blur(31px);
  background: rgba(255, 255, 255, 0.72);
  max-width: 494px;
  height: 553px;
  padding: 60px;
`;

export const Title = styled.h1`
  font-family: "Gilroy";
  font-weight: 700;
  font-size: 56px;
  line-height: 1, 2;
  color: #3a3a3a;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-family: "Gilroy";
  font-weight: 500;
  font-size: 20px;
  line-height: 1, 5;
  color: #898989;
  margin-bottom: 48px;
`;
