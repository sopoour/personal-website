import { robotoMono } from '@app/styles/fonts';
import { flexRow } from '@app/styles/mixins';
import theme from '@app/styles/theme';
import { IoIosArrowForward } from 'react-icons/io';
import { FC, HTMLAttributes } from 'react';
import { styled } from 'styled-components';
import Link from 'next/link';

const Container = styled(Link)`
  font-family: ${robotoMono.style.fontFamily};
  font-weight: 500;
  color: ${theme.colors.fg.default};
  ${flexRow};
  gap: 2px;

  > svg {
    margin-top: 3px;
    color: ${theme.colors.bg.soft};
    transition: all 0.3s ease-in-out;
  }
  transition: all 0.1s ease-in-out;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${theme.colors.accent.green};
    text-underline-offset: 4px;
    > svg {
      transform: translateX(5px);
      color: ${theme.colors.accent.green};
    }
  }
`;

type Props = {
  label: string;
  link: string;
} & HTMLAttributes<unknown>;

const LinkButton: FC<Props> = ({ label, link }) => (
  <Container href={link} target="_blank">
    {label} <IoIosArrowForward />
  </Container>
);

export default LinkButton;
