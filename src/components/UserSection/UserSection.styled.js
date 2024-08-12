import styled from "styled-components";

export const Wrap = styled.div`
  width: 476px;
  height: 221px;
  backdrop-filter: blur(31px);
  background: rgba(255, 255, 255, 0.72);
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Item = styled.li`
  margin-right: 32px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Link = styled.a`
  background: none;
`;

export const BtnWrap = styled.div`
  display: flex;
  margin-top: 66px;
`;

export const Btn = styled.button`
  border: none;
  backdrop-filter: blur(31px);
  background: rgba(255, 255, 255, 0.72);
`;

export const Img = styled.img`
  background: none;
`;
