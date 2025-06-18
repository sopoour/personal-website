import { FC } from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import { type Tag, TagType } from '@app/types';
import { robotoMono } from '@app/styles/fonts';
import { flexRow } from '@app/styles/mixins';
import { AccentColours, DarkAccentColours } from '@app/styles/theme';
import useAccentColour from '@app/hooks/useAccentColour';

const getColourTheme = (type: TagType, theme: typeof AccentColours | typeof DarkAccentColours) => {
  switch (type) {
    case 'tech':
      return { color: theme.green, backgroundColor: theme.greenSoft };
    case 'tool':
      return { color: theme.pink, backgroundColor: theme.pinkSoft };
    case 'skill':
      return { color: theme.orange, backgroundColor: theme.orangeSoft };
  }
};

const Tag = styled(Typography)`
  padding: 1px 8px;
  border-radius: 100px;
  font-weight: 700;
  font-family: ${robotoMono.style.fontFamily};
  list-style: none;
`;

const Container = styled.ul`
  margin: 0;
  padding: 0;
  ${flexRow};
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 16px;
`;

type Props = {
  tags: Tag[];
  className?: string;
  keepBrightColour?: boolean;
};

const Tags: FC<Props> = ({ tags, className, keepBrightColour = false }) => {
  const { AccentColourTheme } = useAccentColour(keepBrightColour);

  return (
    <Container className={className} aria-label="Skill tags">
      {tags.map((tag, index) => (
        <Tag
          key={tag.label + index}
          style={getColourTheme(tag.type, AccentColourTheme)}
          fontSize="12px"
          as="li"
        >
          {tag.label}
        </Tag>
      ))}
    </Container>
  );
};

export default Tags;
