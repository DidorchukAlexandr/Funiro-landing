import styled from "styled-components";
// import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  background: linear-gradient(to right, #f9f1e7 65%, #fcf8f3 35%);
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 100px 0 100px;
  margin-bottom: 45px;
`;

export const Logo = styled.a`
  font-family: "Gilroy";
  font-weight: 700;
  font-size: 24px;
  color: #000;
`;

export const Nav = styled.nav`
  margin-left: 34px;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  font-family: "Gilroy";
  font-weight: 500;
  font-size: 16px;
  color: #3a3a3a;
`;

export const Img = styled.img`
  margin-left: 8px;
  width: 20px;
  height: 20px;
`;
