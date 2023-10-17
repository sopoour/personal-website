import { FC, ReactNode } from 'react';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';
import { css, styled } from 'styled-components';
import theme from '@app/styles/theme';
import profile from '@app/assets/profile_design.png';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import Navigation from '../Navigation';
import LinkContainer from '../LinkContainer';
import { IconLink } from '@app/types';

const links: IconLink[] = [
  { type: 'github' },
  { type: 'linkedin' },
  { type: 'email' },
  { type: 'instagram' },
];

const Backdrop = styled.div<{ $open?: boolean }>`
  position: fixed;
  display: none;
  display: flex;
  padding: 40px 0;
  z-index: 6;

  ${({ $open }) =>
    $open &&
    css`
      display: block;
      &:hover {
        cursor: pointer;
      }
      &:before {
        content: '';
        position: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: transparent;
        opacity: 0.5;
        display: block;
        z-index: -1;
      }
    `}
`;

const Content = styled.header<{ $open?: boolean }>`
  position: sticky;
  overflow-y: auto;
  top: 0;
  bottom: 0;
  height: 100vh;
  background: ${theme.colors.bg.default};
  z-index: 10;
  transition: all 300ms ease-in-out;
  left: 0;
  transform: translateX(-100%);
  opacity: 0;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  width: 250px;
  ${({ $open }) =>
    $open &&
    css`
      transform: none;
      opacity: 1;
    `}
  ${() => theme.media('md')`transform: none;  opacity: 1; padding: 80px 32px; width: 300px;`}
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`;

const ProfileImage = styled(Image)`
  height: auto;
  opacity: 1;
`;

type Props = {
  open?: boolean;
  onClose?: () => void;
};

const Sidebar: FC<Props> = ({ open, onClose }) => {
  const isDesktop = useMedia(Breakpoints.sm);
  return (
    <>
      <Backdrop onClick={onClose} $open={open} />
      <Content $open={open}>
        <Header>
          <ProfileImage
            src={profile.src}
            width={200}
            height={0}
            alt="sophia auer avatar"
            id="profile-sidebar"
          />
          <Typography textalign="center" fontSize="20px">
            Soph. (they/them).
          </Typography>
        </Header>
        <Navigation onClickItem={onClose} />
        <LinkContainer iconLinks={links} />
      </Content>
    </>
  );
};

export default Sidebar;
