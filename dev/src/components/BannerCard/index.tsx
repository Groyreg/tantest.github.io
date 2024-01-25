import { ReactElement } from 'react';
import { Wrapper, Close, Container, Title, Discount, TextContainer, Description, Highlight, Button } from './styles.ts';
import { IProps } from './interfaces.ts';
import { useMediaQuery } from 'react-responsive';

const BannerCard = ({ refData, isCardVisible, onClose }: IProps): ReactElement => {
  const isMobile = useMediaQuery({ query: '(max-width: 635px)' });
  const btnName = isMobile ? 'Shop now' : 'Shop now through Monday';

  return (
    <Wrapper hidden={isCardVisible} isCardVisible={isCardVisible} ref={refData}>
      {/* @ts-ignore */}
      <Close tabindex="3" onClick={onClose} />
      <Container>
        <TextContainer>
          <Title>Black Friday</Title>
          <Discount>10%OFF</Discount>
          <Description>
            Use code <Highlight>10FRIDAY</Highlight> at checkout
          </Description>
          {/* @ts-ignore */}
          <Button tabindex="4">{btnName}</Button>
        </TextContainer>
      </Container>
    </Wrapper>
  );
};

export default BannerCard;
