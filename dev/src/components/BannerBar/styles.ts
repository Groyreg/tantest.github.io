import styled from 'styled-components';
import { CloseOutlined, RightOutlined } from '@ant-design/icons';
// @ts-ignore
import styledContainerQuery from 'styled-container-query';

export const Image = styled.img``;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #ffffff26;
  margin: 0 12px;
`;

export const Text = styled.span`
  margin: 0;
  padding: 0;
  color: white;
  font-family: 'Graphik LC', sans-serif;
  font-size: 16px;
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0.048px;
  flex-shrink: 0;
`;

export const Bold = styled(Text)`
  font-weight: 600;
`;

export const HighLight = styled(Bold)`
  color: #d7a830;
  display: inline !important;
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const ArrowRight = styled(RightOutlined)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: none;

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

export const Close = styled(CloseOutlined)`
  width: 20px;
  height: 20px;
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

export const MobileTextContainer = styled.div`
  display: none;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px 14px;
  color: #0b0b0b;
  text-shadow: 0 0 30px rgba(102, 204, 255, 0.2);
  font-family: 'Graphik LC', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  border-radius: 100px;
  background-color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 200ms linear;
  flex-shrink: 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: white;
  }
`;

export const Wrapper = styledContainerQuery.aside`
  position: absolute;
  top: 60px;
  left: 0;
  height: 54px;
  width: 100%;
  background: linear-gradient(180deg, #101010 0%, #0B0B0B 100%);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  
  &:container(max-width: 500px) {
    padding: 8px 24px 8px 150px;
    
    ${Image} {
        position: absolute;
        left: -70px;
    }
  
    ${MobileTextContainer} {
        display: flex;
    }
    
    ${ArrowRight} {
        display: block;
    }
    
    ${TextContainer} {
        display: none;
    }
    
    ${Button} {
        display: none;
    }
  }
  
  &:container(min-width: 501px and max-width: 700px) {
    padding-left: 200px;
    
    ${Image} {
        position: absolute;
        left: -30px;         
    }
    
      ${MobileTextContainer} {
        display: flex;
    }
    
    ${TextContainer} {
        display: none;
    }
  }

&:container(max-width: 950px) {

    ${Close} {
       display: none;
    }
      
    ${Text} {
        &:last-child {
            display: none;
        }
    }
  }
`;
