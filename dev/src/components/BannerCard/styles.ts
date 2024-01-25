import styled, { css } from 'styled-components';
import card from '@app/assets/banner-card.png';
import { CloseOutlined } from '@ant-design/icons';
import { IStyles } from './interfaces.ts';

export const Wrapper = styled.aside<IStyles>`
  position: absolute;
  display: none;
  top: calc(100vh - 300px);
  right: 0;
  background: url(${card});
  background-size: cover;
  background-position: center;
  width: 600px;
  height: 349px;
  border-radius: 16px;
  padding: 0 35px;
  opacity: 0;
  transform: translateX(100%);
  transition:
    opacity 0.5s ease,
    transform 1.5s ease;

  ${({ isCardVisible }) =>
    isCardVisible &&
    css`
      opacity: 1;
      transform: translateX(-34px);
    `}

  @media screen and (max-width: 635px) {
    width: 100%;
    transform: translateX(0);
    border-radius: 0;
  }
`;

export const Close = styled(CloseOutlined)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 16px;
  height: 16px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    fill: rgba(255, 255, 255, 0.5);
  }

  &:hover {
    svg {
      fill: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 53%;
  height: 100%;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 635px) {
    width: 100%;
  }
`;

export const Title = styled.h4`
  margin: 75px 0 25px;
  color: #fff;
  text-align: center;
  font-family: 'Graphik LC', sans-serif;
  font-size: 46px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -1.84px;
`;

export const Discount = styled.p`
  margin-bottom: 14px;
  background-image: linear-gradient(to right, rgba(210, 152, 26, 0.6), #fff);
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  font-family: 'Graphik LC', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -1.6px;
`;

export const Description = styled.span`
  margin-bottom: 40px;
  color: #6c6c70;
  font-family: 'Graphik LC', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0.08px;
`;

export const Highlight = styled(Description)`
  color: #d7a830;
`;

export const Button = styled.button`
  padding: 12px 22px;
  border-radius: 14px;
  opacity: 0.9;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  text-align: center;
  font-family: 'Graphik LC', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 17.6px */
  letter-spacing: 0.08px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 200ms linear;

  &:hover {
    color: black;
    background-color: #fff;
  }
`;
