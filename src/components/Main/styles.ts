import styled from 'styled-components';

export const Wrapper = styled.main`
  align-items: center;
  background-color: #e55c00;
  display: flex;
  flex-direction: column;
  height: 90%;
  position: relative;
  justify-content: center;
  &:before {
    content: '';
    width: 115px;
    height: 30px;
    background: rgb(0, 0, 0, 0.1);
    position: absolute;
    border-radius: 100%;
    bottom: 44%;
    left: 48;
  }
`;
export const Content = styled.section`
  text-align: center;
  z-index: 1;
`;

export const ImgDog = styled.img`
  width: 14rem;
  height: 14rem;
`;

export const Text = styled.p`
  color: white;
  font-size: 2rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  width: 100%;
  margin-top: 10px;
  padding: 2rem;
  font-size: 1.2rem;
  font-family: 'Author-Regular';
`;
