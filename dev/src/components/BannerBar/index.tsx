import { ReactElement } from 'react';
import {
  Wrapper,
  Image,
  TextContainer,
  Text,
  Divider,
  HighLight,
  Bold,
  Control,
  Close,
  MobileTextContainer,
  Button,
  ArrowRight,
} from './styles.ts';
import gift from '@app/assets/gift-from-bar.png';
import { IProps } from './interfaces.ts';

const BannerBar = ({ refData, onClose }: IProps): ReactElement => (
  <Wrapper ref={refData}>
    <Image src={gift} alt="Подарок от Black Friday" />
    <TextContainer>
      <TextContainer>
        <Bold>Black Friday</Bold>
        <Text>, 24-27 Nov</Text>
      </TextContainer>
      <Divider />
      <HighLight>10%OFF</HighLight>
      <Divider />
      <TextContainer>
        <Text>Use code </Text>&nbsp;
        <HighLight>10FRIDAY</HighLight>&nbsp;
        <Text> at checkout</Text>
      </TextContainer>
    </TextContainer>
    <MobileTextContainer>
      <Bold>Black Friday,</Bold>&nbsp;
      <HighLight>10%OFF</HighLight>
    </MobileTextContainer>
    <Control>
      {/* @ts-ignore */}
      <Button tabindex="1">Shop now</Button>
      {/* @ts-ignore */}
      <Close tabindex="2" onClick={onClose} />
      <ArrowRight />
    </Control>
  </Wrapper>
);

export default BannerBar;
