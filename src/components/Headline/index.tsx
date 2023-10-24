import { FC } from 'react';
import { styled } from 'styled-components';
import Typography from '../Typography/Typography';
import { robotoMono } from '@app/styles/fonts';
import { fadeIn, flexColumn, flexRow } from '@app/styles/mixins';
import theme from '@app/styles/theme';
import getAccentColour from '@app/utils/getAccentColour';

const Container = styled.div`
  ${flexColumn};
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled(Typography)`
  font-family: ${robotoMono.style.fontFamily};
  font-size: 20px;

  ${theme.media('sm')`
    font-size: 24px;
  `}
`;

const RotatingTitle = styled(SubTitle)`
  display: block;
  margin: 0;
  padding: 0;
  color: ${theme.colors.bg.soft};
  animation: rotateText 8s infinite 7s;
  text-align: center;

  @keyframes rotateText {
    16% {
      transform: translateY(-100%);
    }
    32% {
      transform: translateY(-200%);
    }
    48% {
      transform: translateY(-300%);
    }

    64% {
      transform: translateY(-400%);
    }

    80% {
      transform: translateY(-500%);
    }

    100% {
      transform: translateY(-600%);
    }
  }
`;

const RotatingTitles = styled.span`
  overflow: hidden;
  box-sizing: content-box;
  height: 35px;
`;

type Props = {
  className?: string;
};

const Headline: FC<Props> = ({ className }) => {
  const titles = [
    'wannabe artist 🎹🎸🎨',
    'Star Wars fan 🚀',
    'LEGO architect 👷',
    'bookworm 📚',
    'mindfulness advocator 🧘',
    'astronomy nerd 🛰️',
    'wannabe artist 🎹🎸🎨',
  ];

  return (
    <Container aria-label="headlines" className={className}>
      <SubTitle as="h2">Frontend Developer and</SubTitle>
      <RotatingTitles>
        {titles.map((title, index) => (
          <RotatingTitle key={title + index}>{title}</RotatingTitle>
        ))}
      </RotatingTitles>
    </Container>
  );
};

export default Headline;
