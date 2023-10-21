import { NextPage } from 'next';
import styled from 'styled-components';
import Projects from '@app/components/sections/Projects';
import About from '@app/components/sections/About';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Experience from '@app/components/sections/Experience';
import Skills from '@app/components/sections/Skills';

gsap.registerPlugin(ScrollTrigger);

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  padding: 20px 0 32px 0;
  height: 100%;
  overflow: hidden;

  ${({ theme }) => theme.media('sm')`
    padding: 30px 0 48px 0;
    overflow: unset;
  `}
`;

const Home: NextPage = () => (
  <>
    <Projects />
    <Experience />
    <Skills />
    <About />
  </>
);

export default Home;
