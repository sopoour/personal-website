import { FC, useEffect, useState } from 'react';
import {
  BottomLeft,
  IntroContainer,
  LeftTop,
  TopRight,
  BottomRight,
  Title,
  SubTitle,
  TextWrapper,
} from './styles';
import Typography from '../Typography/Typography';

const Intro: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);

      if (scrollPosition > 0) {
        // If scrolled, remove the scroll event listener
        window.removeEventListener('scroll', handleScroll);
        //@ts-ignore
        document.getElementById('layout-root').style.overflow = 'unset';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <IntroContainer $moveAway={isScrolled}>
      <LeftTop />
      <TopRight />
      <BottomLeft />
      <BottomRight />
      <TextWrapper>
        <Title fontSize="40px" fontWeight={700}>
          Hi! I&apos;m Sophia. <span>(they/them).</span>
        </Title>
        <SubTitle fontSize="24px">Frontend Developer</SubTitle>
      </TextWrapper>
    </IntroContainer>
  );
};

export default Intro;
