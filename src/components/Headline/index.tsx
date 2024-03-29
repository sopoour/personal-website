import { FC } from 'react';
import { Container, RotatingTitle, RotatingTitles, SubTitle } from './styles';
import useAccentColour from '@app/hooks/useAccentColour';

type Props = {
  className?: string;
};

const Headline: FC<Props> = ({ className }) => {
  const { getAccentColour } = useAccentColour();

  const titles = [
    'artist 🎹🎸🎨',
    'star wars fan 🚀',
    'LEGO architect 👷',
    'bookworm 📚',
    'underground poet 📜',
    'astronomy nerd 🛰️',
    'artist 🎹🎸🎨',
  ];

  return (
    <Container aria-label="headlines" className={className}>
      <SubTitle as="h2">Frontend Developer and</SubTitle>
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
