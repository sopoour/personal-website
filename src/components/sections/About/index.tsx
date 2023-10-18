import { flexColumn, flexRow } from '@app/styles/mixins';
import { FC, useEffect } from 'react';
import Typography from '../../Typography/Typography';
import Section from '../../layout/Section';
import styled from 'styled-components';
import { robotoMono } from '@app/styles/fonts';
import theme from '@app/styles/theme';
import getAccentColour from '@app/utils/getAccentColour';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { Box, BoxWrapper, BulletWrapper, RobotMono, TextWrapper } from './styles';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const aboutMeDetails = [
  {
    id: 'passionate-box',
    title: 'Passionate about...',
    bullets: [
      'mindfulness',
      'playing music',
      'drawing & painting',
      'astrophysics',
      'human rights',
      'DEI in Tech',
    ],
  },
  {
    id: 'appeciating-box',
    title: 'Appreciating...',
    bullets: [
      'good live music',
      'space for play',
      'inclusive design',
      'honesty',
      'transparency',
      'creativity',
    ],
  },
  {
    id: 'thinking-box',
    title: 'Thinking about...',
    bullets: [
      'which LEGO set to build',
      'next personal project',
      'education improvements',
      'what instrument to learn',
      'my purpose of existence',
      'life and the universe',
    ],
  },
];

const About: FC = () => {
  useEffect(() => {
    // specific elements to be animated
    const boxes = gsap.utils.toArray('.box');

    gsap.fromTo(
      boxes,
      { y: 300, opacity: 0, duration: 2 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.8,
        duration: 2,
        scrollTrigger: {
          trigger: '#box-wrapper',
          scrub: true,
          start: 'top bottom',
          end: 'top 20%',
          immediateRender: false,
        },
      },
    );
  }, []);

  return (
    <Section id="about" mobileTitle="About">
      <>
        <TextWrapper className={'animate'}>
          <Typography>
            I&apos;m passionate about building{' '}
            <RobotMono as="span" color={theme.colors.accent.pink}>
              accessible
            </RobotMono>
            ,{' '}
            <RobotMono as="span" color={theme.colors.accent.green}>
              creative
            </RobotMono>{' '}
            and{' '}
            <RobotMono as="span" color={theme.colors.accent.orange}>
              inclusive
            </RobotMono>{' '}
            products that have a positive impact on society and our environment. User experience and
            writing clean accessible code matter to me. I sweat the details while keeping in mind
            the holistic product plan.
          </Typography>
          <Typography>
            I&apos;m happiest when I&apos;m creating, exploring, and learning about how to make
            things better. My <b>curiosity</b> is my leading driver to dive into different
            programming languages, frontend frameworks, design systems, animations, accessibility
            and much more.
          </Typography>
          <Typography>
            My motto is to always follow whatever sparks that awe in you, then try it, break it and
            try again.
          </Typography>
        </TextWrapper>
        <BoxWrapper id="box-wrapper">
          {aboutMeDetails.map((box, index) => (
            <Box key={box.id} $color={getAccentColour(index)} className={'box'}>
              <Typography fontWeight={700}>{box.title}</Typography>
              <BulletWrapper>
                {box.bullets.map((bullet) => (
                  <RobotMono as="li" key={bullet}>
                    {bullet}
                  </RobotMono>
                ))}
              </BulletWrapper>
            </Box>
          ))}
        </BoxWrapper>
      </>
    </Section>
  );
};

export default About;
