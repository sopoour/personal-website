import { FC, useEffect } from 'react';
import Typography from '../../Typography/Typography';
import Section from '../../layout/Section';
import theme from '@app/styles/theme';
import getAccentColour from '@app/utils/getAccentColour';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { AboutContainer, Box, BoxWrapper, BulletWrapper, RobotMono, TextWrapper } from './styles';

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
    const textLines = gsap.utils.toArray('#text-wrapper > p');

    gsap.fromTo(
      boxes,
      { y: 200, opacity: 0, duration: 2 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.5,
        duration: 2,
        scrollTrigger: {
          trigger: '#box-wrapper',
          scrub: true,
          start: 'top 75%',
          end: '-50% top ',
          immediateRender: false,
        },
      },
    );

    textLines.forEach((line: any) => {
      gsap.fromTo(
        line,
        { y: 200, opacity: 0 },
        {
          y: -50,
          opacity: 1,
          scrollTrigger: {
            trigger: line,
            scrub: 0.5,
            start: 'top 120%',
            end: '-30% top',
          },
        },
      );
    });
  }, []);

  return (
    <Section id="about" mobileTitle="About">
      <AboutContainer>
        <TextWrapper id={'text-wrapper'}>
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
            the holistic product experience.
          </Typography>
          <Typography>
            I&apos;m happiest when I&apos;m creating, exploring, and learning about how to make
            things better. My curiosity is my leading driver to dive into different programming
            languages, frontend frameworks, design systems, animations, accessibility and much more.
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
      </AboutContainer>
    </Section>
  );
};

export default About;
