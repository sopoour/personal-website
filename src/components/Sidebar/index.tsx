import { FC, ReactNode, useState } from 'react';
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
import { flexColumn } from '@app/styles/mixins';
import Email from '../Email';

const links: IconLink[] = [{ type: 'github' }, { type: 'linkedin' }, { type: 'instagram' }];

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

const BottomSection = styled.div`
  ${flexColumn};
  gap: 24px;
`;

type Props = {
  open?: boolean;
  onClose?: () => void;
};

const Sidebar: FC<Props> = ({ open, onClose }) => (
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
          Soph. <span style={{ fontSize: '12px' }}>(they/them).</span>
        </Typography>
      </Header>
      <Navigation onClickItem={onClose} />
      <BottomSection>
        <LinkContainer iconLinks={links} />
        <Email />
      </BottomSection>
    </Content>
  </>
);

export default Sidebar;
