import { FC } from 'react';
import {
  Title,
  ContentWrapper,
  ProfileImage,
  ScrollArrowContainer,
  ScrollArrowFadeElement,
  IntroHeadliine,
} from './styles';
import profile from '@app/assets/profile_design.png';
import { IoIosArrowDown } from 'react-icons/io';
import { scroller } from 'react-scroll';
import GeoBackground from '../GeoBackground';

const Intro: FC = () => {
  return (
    <GeoBackground>
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
        <IntroHeadliine />
        <ScrollArrowContainer
          onClick={() => scroller.scrollTo('projects', { smooth: true, duration: 800 })}
          title="Scroll down button"
          tabIndex={1}
        >
          <IoIosArrowDown />
          <ScrollArrowFadeElement />
          <ScrollArrowFadeElement />
        </ScrollArrowContainer>
      </ContentWrapper>
    </GeoBackground>
  );
};

export default Intro;
