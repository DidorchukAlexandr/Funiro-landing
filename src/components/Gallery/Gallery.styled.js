import styled from "styled-components";

export const GallerySection = styled.section`
  display: flex;
  width: 100%;
  padding: 44px 0 44px 0;
  background: #fcf8f3;
`;

export const Container = styled.div`
  width: 1440px;
  padding: 0 0 0 100px;
  margin: 0 auto;
`;

export const TextWrap = styled.div`
  padding: 179px 86px 179px 0;
`;

export const Title = styled.h2`
  font-family: "Gilroy";
  font-weight: 700;
  font-size: 40px;
  color: #3a3a3a;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  font-family: "Gilroy";
  font-weight: 500;
  font-size: 16px;
  color: #616161;
  margin-bottom: 24px;
`;

export const Btn = styled.button`
  width: 176px;
  height: 48px;
  font-family: "Gilroy";
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  background: #e89f71;
  border: none;
`;

export const Wrap = styled.div`
  display: flex;
`;

export const GalleryWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

export const ImgWrap = styled.div`
  position: relative;
`;

export const Image = styled.img`
  margin-bottom: 40px;
`;

export const Img = styled.img``;

export const ImgTextWrap = styled.div`
  position: absolute;
  top: 428px;
  right: 162px;
  width: 217px;
  height: 130px;
  backdrop-filter: blur(3px);
  background: rgba(255, 255, 255, 0.72);
  padding: 32px;
`;

export const Span = styled.p`
  font-family: "Gilroy";
  font-weight: 500;
  font-size: 16px;
  color: #616161;
  margin-bottom: 8px;
`;

export const SpanLine = styled.span`
  margin: 0 6px;
`;

export const ImgText = styled.h3`
  font-family: "Gilroy";
  font-weight: 600;
  font-size: 28px;
  color: #3a3a3a;
`;

export const BtnSquare = styled.button`
  position: absolute;
  top: 509px;
  left: 235px;
  border: none;
  background: none;
`;

export const PaginationImg = styled.div`
  position: relative;
`;

export const BtnSvg = styled.button`
  position: absolute;
  top: 270px;
  right: -23px;
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
