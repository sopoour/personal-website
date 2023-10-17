import { flexColumn } from '@app/styles/mixins';
import { FC } from 'react';
import Headline from '../Headline';
import Typography from '../Typography/Typography';
import Section from '../layout/Section';
import styled from 'styled-components';
import { robotoMono } from '@app/styles/fonts';
import theme from '@app/styles/theme';

const FocusSpan = styled(Typography)`
  font-family: ${robotoMono.style.fontFamily};
`;

const About: FC = () => {
  return (
    <Section id="about">
      <Headline className={'animate'} />
      <Typography>
        I&apos;m passionate about building{' '}
        <FocusSpan as="span" color={theme.colors.accent.pink}>
          accessible
        </FocusSpan>
        ,{' '}
        <FocusSpan as="span" color={theme.colors.accent.green}>
          creative
        </FocusSpan>{' '}
        and{' '}
        <FocusSpan as="span" color={theme.colors.accent.orange}>
          inclusive
        </FocusSpan>{' '}
        products that have a positive impact on society and our environment. User experience and
        writing clean accessible code matter to me. I sweat the details, tho keeping in mind the
        holistic product experience.
      </Typography>
      <Typography>
        I&apos;m happiest when I&apos;m creating, learning, exploring and thinking about how to make
        things better. My <b>curiosity</b> has been my leading driver to dive into different
        programming languages, frontend frameworks, design systems, animations, accessibility and
        much more. My motto is to always follow whatever sparks that awe in you, then try it, break
        it and try again.
      </Typography>
    </Section>
  );
};

export default About;
