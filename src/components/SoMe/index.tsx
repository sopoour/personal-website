import { flexRow } from '@app/styles/mixins';
import { FC } from 'react';
import { styled } from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import theme from '@app/styles/theme';
import Link from 'next/link';

const links = [
  { id: 'github', icon: <FaGithub />, link: 'https://github.com/sopoour' },
  { id: 'linkedin', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/sophiaauer/' },
  { id: 'email', icon: <FaEnvelope />, link: 'mailto:sophia.auer@gmail.com' },
  { id: 'instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/_sopo_/' },
];

const Container = styled.span`
  ${flexRow};
  gap: 16px;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease-in-out;
    path {
      fill: ${theme.colors.bg.soft};
      transition: fill 0.3s ease-in-out;
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      path {
        fill: ${theme.colors.accent.green};
      }
    }
  }
`;

const SoMe: FC = () => (
  <Container aria-label="Social Media links">
    {links.map((item) => (
      <Link href={item.link} key={item.id} target="_blank" aria-label={item.id}>
        {item.icon}
      </Link>
    ))}
  </Container>
);

export default SoMe;
