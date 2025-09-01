import { FC } from 'react';
import { Container, RotatingTitle, RotatingTitles, SubTitle } from './styles';
import useAccentColour from '@app/hooks/useAccentColour';

type Props = {
  className?: string;
};

const Headline: FC<Props> = ({ className }) => {
  const { getAccentColour } = useAccentColour();

  const titles = [
    'LEGO architect 👷',
    'star wars fan 🚀',
    'bookworm 📚',
    'artsy 🎹🎸🎨',
    'basketball newby 🏀',
    'astronomy enthusiast 🛰️',
    'LEGO architect 👷',
  ];

  return (
    <Container aria-label="headlines" className={className}>
      <SubTitle as="h2">Creative Frontend Developer and</SubTitle>
      <RotatingTitles>
        {titles.map((title, index) => (
          <RotatingTitle key={title + index} as="h3" color={getAccentColour(index)}>
            {title}
          </RotatingTitle>
        ))}
      </RotatingTitles>
    </Container>
  );
};

export default Headline;
