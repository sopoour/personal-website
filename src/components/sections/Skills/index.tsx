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
import { flexColumn, flexRow } from '@app/styles/mixins';
import { Tag } from '@app/types';

const types = ['tech', 'framework', 'tool'];

const skills = [
  { type: 'tech', label: 'Next.js' },
  { type: 'framework', label: 'React' },
  { type: 'tech', label: 'Typescript' },
  { type: 'tool', label: 'Webflow' },
  { type: 'tech', label: 'CSS' },
  { type: 'tech', label: 'Python' },
  { type: 'tech', label: 'GraphQL' },
  { type: 'tool', label: 'Figma' },
  { type: 'framework', label: 'MaterialUI' },
  { type: 'framework', label: 'Radix UI' },
  { type: 'tech', label: 'styled-components' },
  { type: 'tool', label: 'Prisma' },
  { type: 'tool', label: 'Contentful' },
  { type: 'tool', label: 'Storybook' },
  { type: 'tool', label: 'Cypress' },
  { type: 'tool', label: 'Vercel' },
  { type: 'framework', label: 'GSAP' },
  { type: 'tool', label: 'Netlify' },
  { type: 'tech', label: 'Node.js' },
];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const RelativeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 16px;
  margin: 0 auto;
`;

const BallVar = styled(Ball)<{ fill: string }>`
  circle:first-of-type {
    fill: ${({ fill }) => fill};
  }
`;

const BallWrapper = styled.span`
  width: 88px;
  height: 88px;

  opacity: 0;
  &:hover {
    cursor: pointer;
  }

  ${Typography} {
    position: absolute;
    width: 88px;
    text-align: center;
    height: max-content;
    font-weight: 500;
    overflow-wrap: break-word;
    hyphens: manual;
    left: 0;
    right: 0;
    top: -15%;
    bottom: 0;
    margin: auto;
  }
`;

const Column = styled.div`
  ${flexColumn};
  gap: 32px;
  align-items: center;
  > ${Typography} {
    opacity: 0;
  }
`;

const Bucket = styled.div`
  ${flexRow};
  flex-wrap: wrap;
  gap: 4px;
  height: 25%;
  max-width: 280px;
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
        start: 'top 100%',
        end: 'bottom bottom',
        scrub: 10,
        toggleActions: 'play none none reverse',
      },
    });

    tl.set('.ball', { x: () => getRand(-100, 100), y: () => getRand(-80, 80) });

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
        stagger: 0.6,
      },
    );

    tl.to('.ball', {
      duration: 2,
      ease: 'power1.inOut',
      stagger: 0.6,
      x: 0,
      y: 0,
    });

    tl.fromTo(
      '.title',
      {
        opacity: 0,
        y: -50,
      },
      {
        duration: 0.5,
        ease: 'power1.inOut',
        opacity: 1,
        stagger: 0.3,
        y: 0,
      },
    );

    gsap.utils.toArray('.ball').forEach((ball: any) => {
      ball?.addEventListener('mouseenter', () => {
        tl.pause();
        gsap.to(ball, { scale: 1.2, zIndex: 100, opacity: 0.9 });
      });

      ball?.addEventListener('mouseleave', () => {
        tl.resume();
        gsap.to(ball, { zIndex: 0, scale: 1, opacity: 1 });
      });
    });
  }, []);

  return (
    <Section mobileTitle="Skills" id="skills">
      <RelativeWrapper>
        {types.map((type) => (
          <Column key={type} className="column">
            <Typography fontWeight={700} className="title">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Typography>
            <Bucket>
              {skills
                .filter((skill) => skill.type === type)
                .map((skill, index) => (
                  <BallWrapper key={skill.label} className="ball">
                    <BallVar fill={getAccentColour(index)} />
                    <Typography
                      fontSize="12px"
                      type={robotoMono.style.fontFamily}
                      color={theme.colors.fg.contrast}
                      className="text"
                    >
                      {skill.label}
                    </Typography>
                  </BallWrapper>
                ))}
            </Bucket>
          </Column>
        ))}
      </RelativeWrapper>
    </Section>
  );
};

export default Skills;
