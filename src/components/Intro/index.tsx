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

const Intro: FC = () => (
  <GeoBackground ariaLabel="Introduction">
    <ContentWrapper id="intro">
      <ProfileImage
        src={profile.src}
        width={400}
        height={305}
        alt="fio auer avatar"
        id="profile-intro"
        priority
      />
      <Title
        fontWeight={700}
        as="h1"
        aria-label="Personal Website by Fio Auer"
        title="Personal Website by Fio Auer"
      >
        Hi! I&apos;m Fio. <span>(they/them).</span>
      </Title>
      <IntroHeadliine />
      <ScrollArrowContainer
        onClick={() => scroller.scrollTo('projects', { smooth: true, duration: 800 })}
        title="Scroll down button"
      >
        <IoIosArrowDown />
        <ScrollArrowFadeElement />
        <ScrollArrowFadeElement />
      </ScrollArrowContainer>
    </ContentWrapper>
  </GeoBackground>
);

export default Intro;
