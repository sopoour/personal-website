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
      'tinkering',
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
      'next tinkering project',
      'living on another planet',
      'education improvements',
      'what instrument to learn',
      'life and the universe',
    ],
  },
];

const About: FC = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
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
            scrub: 0.2,
            start: 'top 100%',
            end: '-50% top ',
            immediateRender: false,
          },
        },
      );

      textLines.forEach((line: any) => {
        gsap.fromTo(
          line,
          { y: 100, opacity: 0 },
          {
            y: -50,
            opacity: 1,
            delay: 2,
            scrollTrigger: {
              trigger: line,
              scrub: 0.5,
              start: 'top 120%',
              end: '-30% top',
            },
          },
        );
      });
    });
    return () => ctx.revert();
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
            I have <b>5+ years of experience in the Tech industry</b>, first as{' '}
            <b>Product Manager</b> and then as <b>Frontend Developer</b>. I&apos;m happiest when
            I&apos;m creating, exploring, and learning how to make things better.
          </Typography>
          <Typography>
            <b>Curiosity</b> is the main driver in both my career and personal life. My motto is to
            always follow whatever sparks that awe in you, then try it, break it and try again.
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
