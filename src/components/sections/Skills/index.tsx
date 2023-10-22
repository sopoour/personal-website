import { FC, useEffect } from 'react';
import Ball from './assets/ball.svg';
import styled from 'styled-components';
import Section from '@app/components/layout/Section';
import theme from '@app/styles/theme';
import getAccentColour from '@app/utils/getAccentColour';
import Typography from '@app/components/Typography/Typography';
import { robotoMono } from '@app/styles/fonts';
import { flexColumn, flexRow } from '@app/styles/mixins';
import runAnimations from './utils/runAnimations';
import { skillTypes, skills } from './utils/data';

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
  useEffect(() => {
    runAnimations();
  }, []);

  return (
    <Section mobileTitle="Skills" id="skills">
      <RelativeWrapper>
        {skillTypes.map((type) => (
          <Column key={type}>
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
