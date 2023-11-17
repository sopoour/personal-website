import { FC, useEffect } from 'react';
import GeoBackground from '../GeoBackground';
import styled from 'styled-components';
import { flexColumn } from '@app/styles/mixins';
import Typography from '../Typography/Typography';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import { IconLink } from '@app/types';
import LinkContainer from '../LinkContainer';
import Email from '../Email';
import { robotoMono } from '@app/styles/fonts';
import { Breakpoints } from '@app/styles/media';
import { useMedia } from '@app/hooks/useMedia';

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

  ${({ theme }) => theme.media('sm')`
    width: 45rem;
  `}
`;

const Title = styled(Typography)`
  font-size: 40px;
  ${({ theme }) => theme.media('sm')`
    font-size: 60px;
`}
`;

const OutroDescription = styled(Typography)`
  text-align: center;
  line-height: 175%;
  font-size: 16px;

  ${({ theme }) => theme.media('sm')`
    font-size: 18px;
  `}
`;

const BottomSection = styled.div`
  ${flexColumn};
  gap: 32px;
`;

const Question = styled(OutroDescription)`
  font-family: ${robotoMono.style.fontFamily};

  color: ${({ theme }) => theme.colors.accent.green};
  font-weight: 500;
  ${({ theme }) => theme.media('sm')`
    font-size: 18px;
  `}
`;

const Outro: FC = () => {
  const isDesktop = useMedia(Breakpoints.sm);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const title = document.getElementById('title');
      if (title) {
        const titleSplit = new SplitType(title, { types: 'chars' });
        const titleChars = titleSplit.chars;
        gsap.set(titleChars, { opacity: 0, y: 200 });
        gsap.to(titleChars, {
          duration: 1,
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: 'back',
          scrollTrigger: {
            trigger: '#outro',
            start: isDesktop ? 'top 100%' : 'top 150%',
          },
        });
      }
    });
    return () => ctx.revert();
  }, [isDesktop]);
  return (
    <GeoBackground ariaLabel="Outro">
      <ContentWrapper id="outro">
        <Title fontSize="60px" id="title" as="h2">
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
