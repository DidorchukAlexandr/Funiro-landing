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
  background: #f9f1e7;
`;
