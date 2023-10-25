import { FC } from 'react';
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
import { animateScroll } from 'react-scroll';
import useSidebar from '@app/hooks/useSidebar';

const links: IconLink[] = [{ type: 'github' }, { type: 'linkedin' }, { type: 'instagram' }];

const Backdrop = styled.div<{ $open?: boolean }>`
  position: fixed;
  display: none;
  display: flex;
  padding: 40px 0;
  z-index: 5;

  ${({ $open }) =>
    $open &&
    css`
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
        background: rgba(17, 22, 71, 0.1);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
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
  -webkit-transition: all 300ms ease-in-out;
  left: 0;
  transform: translate3d(-100%, 0, 0);
  -webkit-transform: translate3d(-100%, 0, 0);
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
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
      opacity: 1;
    `}
  ${() =>
    theme.media('md')`
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    opacity: 1; 
    padding: 80px 32px; 
    width: 300px;`}
`;

const Header = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`;

const ProfileImage = styled(Image)`
  width: 100%;
  height: auto;
  opacity: 1;
`;

const BottomSection = styled.div`
  ${flexColumn};
  gap: 24px;
`;

const Sidebar: FC = () => {
  const { open, close } = useSidebar((state) => state);
  return (
    <>
      <Backdrop onClick={close} $open={open} />
      <Content $open={open} id="sidebar" aria-label="sidebar">
        <Header
          onClick={() => animateScroll.scrollTo(0, { smooth: true, duration: 800 })}
          aria-label="Logo"
          aria-description="On click scrolls you back to the top"
        >
          <ProfileImage
            src={profile.src}
            width={200}
            height={200}
            alt="sophia auer sidebar avatar"
            id="profile-sidebar"
            priority
          />
          <Typography $textalign="center" fontSize="18px">
            Sophia Auer (Soph)
          </Typography>
        </Header>
        <Navigation onClickItem={close} />
        <BottomSection>
          <LinkContainer iconLinks={links} />
          <Email />
        </BottomSection>
      </Content>
    </>
  );
};

export default Sidebar;
