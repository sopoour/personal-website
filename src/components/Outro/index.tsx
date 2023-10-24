import { FC, useEffect } from 'react';
import GeoBackground from '../GeoBackground';
import styled from 'styled-components';
import { flexColumn } from '@app/styles/mixins';
import theme from '@app/styles/theme';
import Typography from '../Typography/Typography';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import { IconLink } from '@app/types';
import LinkContainer from '../LinkContainer';
import Email from '../Email';
import { robotoMono } from '@app/styles/fonts';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';

gsap.registerPlugin(ScrollTrigger);

const links: IconLink[] = [{ type: 'github' }, { type: 'linkedin' }, { type: 'instagram' }];

const ContentWrapper = styled.div`
  ${flexColumn};
  gap: 40px;
  margin: auto;
  width: 100%;
  align-items: center;
  z-index: 10;
  padding: 16px;

  ${theme.media('sm')`
    width: 45rem;
  `}
`;

const Title = styled(Typography)`
  font-size: 40px;
  ${theme.media('sm')`
    font-size: 60px;
`}
`;

const OutroDescription = styled(Typography)`
  text-align: center;
  font-weight: 500;
  line-height: 175%;
  font-size: 16px;

  ${theme.media('sm')`
    font-size: 18px;
  `}
`;

const BottomSection = styled.div`
  ${flexColumn};
  gap: 32px;
`;

const Question = styled(OutroDescription)`
  font-family: ${robotoMono.style.fontFamily};

  color: ${theme.colors.accent.green};

  ${theme.media('sm')`
    font-size: 18px;
  `}
`;

const Outro: FC = () => {
  const isDesktop = useMedia(Breakpoints.sm);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const title = document.getElementById('title');
      if (title && isDesktop) {
        const titleSplit = new SplitType(title, { types: 'chars' });
        const titleChars = titleSplit.chars;
        gsap.set(titleChars, { opacity: 0, y: 80 });
        gsap.fromTo(
          titleChars,
          { opacity: 0, y: 200 },
          {
            duration: 1,
            opacity: 1,
            y: 0,
            stagger: 0.05,
            ease: 'back',
            scrollTrigger: {
              trigger: '#outro',
              start: 'top 125%',
              scrub: 1,
            },
          },
        );
      }
    });
    return () => ctx.revert();
  }, [isDesktop]);
  return (
    <GeoBackground>
      <ContentWrapper id="outro">
        <Title fontSize="60px" id="title">
          Let&apos;s Chat ✌️
        </Title>
        <Question>Need a passionate Frontend Developer to help out?</Question>
        <OutroDescription>
          Shoot me an email, let&apos;s meet and discuss it in more detail. Alternatively connect
          with me elsewhere on the web:
        </OutroDescription>

        <BottomSection>
          <LinkContainer iconLinks={links} size="big" />
          <Email fontSize="16px" />
        </BottomSection>
      </ContentWrapper>
    </GeoBackground>
  );
};

export default Outro;
