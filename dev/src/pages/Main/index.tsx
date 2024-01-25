import { ReactElement, useEffect, useState, useRef } from 'react';
import { Wrapper } from './styles.ts';
import BannerBar from '@components/BannerBar';
import BannerCard from '@components/BannerCard';

const addDelay = (delay = 0) => new Promise(resolve => setTimeout(resolve, delay));

const Main = (): ReactElement => {
  const isClosed = localStorage.getItem('isCardClosed');
  const bannerBarRef = useRef<HTMLDivElement>(null);
  const bannerCardRef = useRef<HTMLDivElement>(null);

  const [isCardVisible, setIsCardVisible] = useState<boolean>(false);
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(true);
  const [isCardExist, setIsCardExist] = useState<boolean>(false);

  const onCardClose = async (): Promise<void> => {
    setIsCardVisible(false);
    localStorage.setItem('isCardClosed', 'true');
    await addDelay(400);
    setIsCardExist(false);
  };

  const onBannerClose = (): void => {
    setIsBannerVisible(false);
  };

  const onScroll = (): (() => void) => {
    const handleScroll = () => {
      if (!(bannerBarRef.current && bannerCardRef.current)) return;

      const bannerBarBottom = bannerBarRef.current.getBoundingClientRect().bottom;

      if (bannerBarBottom < 0 && isClosed === null) {
        bannerCardRef.current.style.display = 'block';
        setIsCardVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };

  const onInit = (): void => {
    if (isClosed === 'true') {
      setIsCardExist(false);
    } else {
      setIsCardExist(true);
    }
  };

  useEffect(onInit, []);
  useEffect(onScroll, []);

  return (
    <Wrapper>
      {isBannerVisible && <BannerBar onClose={onBannerClose} refData={bannerBarRef} />}
      {isCardExist && <BannerCard onClose={onCardClose} isCardVisible={isCardVisible} refData={bannerCardRef} />}
    </Wrapper>
  );
};

export default Main;
