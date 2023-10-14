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
  ScrollArrowContainer,
  ScrollArrowFadeElement,
} from './styles';
import profile from '@app/assets/profile_design.png';
import { IoIosArrowDown } from 'react-icons/io';
import { animateScroll } from 'react-scroll';

const Intro: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
      if (scrollPosition > 0) {
        // If scrolled, remove the scroll event listener
        window.removeEventListener('scroll', handleScroll);
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
        <Title
          fontWeight={700}
          as="h1"
          aria-label="Personal Website by Sophia Auer"
          title="Personal Website by Sophia Auer"
        >
          Hi! I&apos;m Soph. <span>(they/them).</span>
        </Title>
        <SubTitle as="h2">Frontend Developer</SubTitle>
        <ScrollArrowContainer
          onClick={() => animateScroll.scrollTo(30, { smooth: true, duration: 500 })}
          title="Scroll down button"
        >
          <IoIosArrowDown />
          <ScrollArrowFadeElement />
          <ScrollArrowFadeElement />
        </ScrollArrowContainer>
      </ContentWrapper>
    </IntroContainer>
  );
};

export default Intro;
