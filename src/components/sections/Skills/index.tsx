import { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

import Ball from './assets/ball.svg';
import styled from 'styled-components';
import Section from '@app/components/layout/Section';
import theme from '@app/styles/theme';
import getAccentColour from '@app/utils/getAccentColour';
import Typography from '@app/components/Typography/Typography';
import { robotoMono } from '@app/styles/fonts';
import { flexRow } from '@app/styles/mixins';

const skills = [
  'Next.js',
  'React',
  'Typescript',
  'Webflow',
  'CSS',
  'Python',
  'GraphQL',
  'Figma',
  'MaterialUI',
  'Radix UI',
  'styled-components',
  'Prisma',
  'Contentful',
  'Storybook',
  'Cypress',
  'Vercel',
  'GSAP',
  'Netlify',
  'Node.js',
];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const RelativeWrapper = styled.div`
  position: relative;
  ${flexRow};
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  height: 50vh;
  margin: 0 auto;

  ${theme.media('md')`
  width: 75%;
  height: 50%;
  `}
`;

const BallVar = styled(Ball)<{ fill: string }>`
  circle:first-of-type {
    fill: ${({ fill }) => fill};
  }
`;

const BallWrapper = styled.span<{ top?: string; left?: string }>`
  position: absolute;
  width: 88px;
  height: 88px;
  margin: auto;
  opacity: 0;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  &:hover {
    cursor: pointer;
  }

  ${Typography} {
    position: absolute;
    width: 88px;
    text-align: center;
    height: max-content;
    font-weight: 500;
    /*  inline-size: 80px; */
    overflow-wrap: break-word;
    hyphens: manual;
    left: 0;
    right: 0;
    top: -15%;
    bottom: 0;
    margin: auto;
  }
`;

const Skills: FC = () => {
  const getRand = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  useEffect(() => {
    const tl = gsap?.timeline({
      paused: true,
      scrollTrigger: {
        trigger: '#skills',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      '.ball',
      {
        scale: () => (getRand(1, 9) / 100.0).toFixed(2),
        ease: 'power1.inOut',
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 2,
        stagger: 0.3,
      },
    );
    tl.to('.ball', {
      duration: 2,
      ease: 'power1.inOut',
      x: () => getRand(-80, 80),
      y: () => getRand(-60, 60),
      stagger: 0.3,
    });

    tl.to('.ball', {
      duration: 2,
      ease: 'power1.inOut',
      stagger: 0.3,
      x: 0,
      y: 0,
    });

    tl.to('.ball', {
      duration: 5,
      position: 'static',
      ease: 'none',
      stagger: 0.4,
    });

    gsap.utils.toArray('.ball').forEach((ball: any) => {
      ball?.addEventListener('mouseenter', () => {
        tl.pause();
        gsap.to(ball, { scale: 1.5, zIndex: 100 });
      });

      ball?.addEventListener('mouseleave', () => {
        tl.resume();
        gsap.to(ball, { zIndex: 0, scale: 1 });
      });
    });
  }, []);

  return (
    <Section mobileTitle="Skills" id="skills">
      <RelativeWrapper>
        {skills.map((skill, index) => (
          <BallWrapper
            key={skill}
            className="ball"
            left={Math.random() * 100 + '%'}
            top={Math.random() * 100 + '%'}
          >
            <BallVar fill={getAccentColour(index)} />
            <Typography
              fontSize="12px"
              type={robotoMono.style.fontFamily}
              color={theme.colors.fg.contrast}
              className="text"
            >
              {skill}
            </Typography>
          </BallWrapper>
        ))}
      </RelativeWrapper>
    </Section>
  );
};

export default Skills;
