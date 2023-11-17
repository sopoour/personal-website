import { FC } from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import { Tag, TagType } from '@app/types';
import { robotoMono } from '@app/styles/fonts';
import { flexRow } from '@app/styles/mixins';
import { AccentColours } from '@app/styles/theme';

const getColourTheme = (type: TagType) => {
  switch (type) {
    case 'tech':
      return { color: AccentColours.green, backgroundColor: AccentColours.greenSoft };
    case 'tool':
      return { color: AccentColours.pink, backgroundColor: AccentColours.pinkSoft };
    case 'skill':
      return { color: AccentColours.orange, backgroundColor: AccentColours.orangeSoft };
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
};

const Tags: FC<Props> = ({ tags, className }) => (
  <Container className={className} aria-label="Skill tags">
    {tags.map((tag, index) => (
      <Tag key={tag.label + index} style={getColourTheme(tag.type)} fontSize="12px" as="li">
        {tag.label}
      </Tag>
    ))}
  </Container>
);

export default Tags;
