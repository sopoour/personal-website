import { FC, useEffect } from 'react';
import Section from '@app/components/layout/Section';
import theme from '@app/styles/theme';
import getAccentColour from '@app/utils/getAccentColour';
import Typography from '@app/components/Typography/Typography';
import { robotoMono } from '@app/styles/fonts';
import runAnimations from './utils/runAnimations';
import { skillTypes, skills } from './utils/data';
import { gsap } from 'gsap';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';
import { BallVar, BallWrapper, Bucket, Column, Wrapper } from './styles';

const Skills: FC = () => {
  const isDesktop = useMedia(Breakpoints.sm);
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (isDesktop) runAnimations();
    });
    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <Section mobileTitle="Skills" id="skills">
      <Wrapper className={!isDesktop ? 'animate-scale' : ''}>
        {skillTypes.map((type) => (
          <Column key={type}>
            <Typography fontWeight={700} className="title">
              {type
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ')}
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
      </Wrapper>
    </Section>
  );
};

export default Skills;
