import { FC, useEffect, useState } from 'react';
import {
  BottomLeft,
  IntroContainer,
  LeftTop,
  TopRight,
  BottomRight,
  Title,
  SubTitle,
  ContentWrapper,
  ProfileImage,
} from './styles';
import profile from '@app/assets/profile_design.png';

const Intro: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      if (scrollPosition > 10) {
        // If scrolled, remove the scroll event listener
        window.removeEventListener('scroll', handleScroll);
        //@ts-ignore
        document.getElementById('layout-root').style.overflowY = 'unset';
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
      <ContentWrapper>
        <ProfileImage src={profile.src} width={400} height={305} alt="sophia auer avatar" />
        <Title fontWeight={700}>
          Hi! I&apos;m Sophia. <span>(they/them).</span>
        </Title>
        <SubTitle>Frontend Developer</SubTitle>
      </ContentWrapper>
    </IntroContainer>
  );
};

export default Intro;
