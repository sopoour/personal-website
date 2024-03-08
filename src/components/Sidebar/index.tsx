import { FC } from 'react';
import profile from '@app/assets/profile_design.png';
import Typography from '../Typography/Typography';
import Navigation from '../Navigation';
import LinkContainer from '../LinkContainer';
import { IconLink } from '@app/types';
import Email from '../Email';
import { animateScroll } from 'react-scroll';
import useSidebar from '@app/hooks/useSidebar';
import { Backdrop, BottomSection, Content, Header, ProfileImage } from './styles';
import ThemeToggle from '../ThemeToggle';

const links: IconLink[] = [{ type: 'github' }, { type: 'linkedin' }, { type: 'instagram' }];

const Sidebar: FC = () => {
  const { open, close } = useSidebar((state) => state);

  return (
    <>
      <Backdrop onClick={close} $open={open} />
      <Content $open={open} id="sidebar" aria-label="sidebar">
        <ThemeToggle onClick={close} />
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
            Sophia Auer (Fio / Soph)
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
