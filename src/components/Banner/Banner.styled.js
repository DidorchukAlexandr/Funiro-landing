import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  z-index: 1;
  top: 25px;
  left: 130px;
  backdrop-filter: blur(31px);
  background: rgba(255, 255, 255, 0.72);
  width: 494px;
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
