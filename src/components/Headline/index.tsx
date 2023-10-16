import { FC } from 'react';
import { styled } from 'styled-components';
import Typography from '../Typography/Typography';
import { robotoMono } from '@app/styles/fonts';
import { fadeIn, flexColumn, flexRow } from '@app/styles/mixins';
import theme from '@app/styles/theme';

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

const RotatingTitle = styled(SubTitle)<{ $stepNum: number }>`
  display: block;
  margin: 0;
  padding: 0;
  animation: rotateText 7s infinite 7s;
  text-align: center;

  @keyframes rotateText {
    5% {
      transform: translateY(-112%);
    }
    10% {
      transform: translateY(-100%);
    }
    15% {
      transform: translateY(-212%);
    }
    25% {
      transform: translateY(-200%);
    }
    35% {
      transform: translateY(-312%);
    }
    45% {
      transform: translateY(-300%);
    }
    55% {
      transform: translateY(-412%);
    }
    65% {
      transform: translateY(-400%);
    }
    75% {
      transform: translateY(-512%);
    }
    85% {
      transform: translateY(-500%);
    }
    95% {
      transform: translateY(-612%);
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
  const titleColours = [
    theme.colors.accent.pink,
    theme.colors.accent.green,
    theme.colors.accent.orange,
  ];
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
          <RotatingTitle key={title} color={titleColours[index % 3]} $stepNum={index}>
            {title}
          </RotatingTitle>
        ))}
      </RotatingTitles>
    </Container>
  );
};

export default Headline;
