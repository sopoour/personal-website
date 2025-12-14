import { FC } from 'react';
import {
  Title,
  ContentWrapper,
  ProfileImage,
  ScrollArrowContainer,
  ScrollArrowFadeElement,
  IntroHeadliine,
  ContactMe,
} from './styles';
import profile from '@app/assets/profile_design.png';
import { IoIosArrowDown } from 'react-icons/io';
import { scroller } from 'react-scroll';
import GeoBackground from '../GeoBackground';
import { Question } from '../Outro';
import Email from '../Email';

const Intro: FC = () => (
  <GeoBackground ariaLabel="Introduction">
    <ContentWrapper id="intro">
      <ProfileImage
        src={profile.src}
        width={profile.width / 3}
        height={profile.height / 3}
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
      <ContactMe>
        <Question>Looking for a new website? - Hit me up:</Question>
        <Email fontSize="14px" />
      </ContactMe>

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
