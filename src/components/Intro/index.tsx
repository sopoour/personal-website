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
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

const Intro: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 25);

      if (scrollPosition > 25) {
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
        <Link href="#projects">
          <ScrollArrowContainer>
            <IoIosArrowDown />
            <ScrollArrowFadeElement />
            <ScrollArrowFadeElement />
          </ScrollArrowContainer>
        </Link>
      </ContentWrapper>
    </IntroContainer>
  );
};

export default Intro;
