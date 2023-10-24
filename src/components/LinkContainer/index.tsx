import { flexRow } from '@app/styles/mixins';
import { FC, useMemo } from 'react';
import { css, styled } from 'styled-components';
import theme from '@app/styles/theme';
import Link from 'next/link';
import { IconLink } from '@app/types';
import { FaEnvelope, FaExternalLinkAlt, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

type Size = 'small' | 'medium' | 'big';

const getSize = (size: Size) => {
  switch (size) {
    case 'small':
      return '16px';
    case 'medium':
      return '20px';
    case 'big':
      return '35px';
    default:
      return '20px';
  }
};

const Container = styled.span<{ hoverColour?: string; size: Size }>`
  ${flexRow};
  gap: 16px;
  justify-content: center;
  svg {
    width: ${({ size }) => getSize(size)};
    height: ${({ size }) => getSize(size)};
    transition: all 0.3s ease-in-out;
    path {
      fill: ${theme.colors.bg.soft};
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      path {
        fill: ${({ hoverColour }) => hoverColour ?? theme.colors.accent.green};
      }
    }

    ${({ size }) =>
      size === 'small' &&
      css`
        margin-bottom: 3px;

        &:hover {
          path {
            fill: ${theme.colors.fg.default};
            opacity: 1;
          }
        }
      `}
  }
`;

type Props = {
  iconLinks: IconLink[];
  hoverColour?: string;
  size?: Size;
  ariaLabel?: string;
  className?: string;
  tabIndex?: number;
};

const LinkContainer: FC<Props> = ({
  iconLinks,
  className,
  hoverColour,
  ariaLabel,
  size = 'medium',
  tabIndex = 2,
}) => {
  const links = useMemo(
    () =>
      iconLinks.map((icon) => {
        switch (icon.type) {
          case 'github':
            return {
              id: icon.id ?? 'personal github',
              icon: <FaGithub />,
              link: icon.link ?? 'https://github.com/sopoour',
            };
          case 'linkedin':
            return {
              id: 'linkedin',
              icon: <FaLinkedin />,
              link: 'https://www.linkedin.com/in/sophiaauer/',
            };
          case 'email':
            return { id: 'email', icon: <FaEnvelope />, link: 'mailto:sophia.auer@gmail.com' };
          case 'instagram':
            return {
              id: 'instagram',
              icon: <FaInstagram />,
              link: 'https://www.instagram.com/_sopo_/',
            };
          case 'link':
            return { id: icon.id ?? 'external link', icon: <FaExternalLinkAlt />, link: icon.link };
          default:
            return { id: 'email', icon: <FaEnvelope />, link: 'mailto:sophia.auer@gmail.com' };
        }
      }),
    [iconLinks],
  );

  return (
    <Container
      aria-label={ariaLabel ?? 'Social Media links'}
      className={className}
      hoverColour={hoverColour}
      size={size ?? 'big'}
    >
      {links?.map(
        (item) =>
          item.link && (
            <Link
              href={item.link}
              key={item.id}
              target="_blank"
              aria-label={item.id}
              tabIndex={tabIndex}
            >
              {item.icon}
            </Link>
          ),
      )}
    </Container>
  );
};

export default LinkContainer;
