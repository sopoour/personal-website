import { NextPage } from 'next';
import styled from 'styled-components';
import Projects from '@app/components/sections/Projects';
import About from '@app/components/sections/About';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Experience from '@app/components/sections/Experience';

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

const Home: NextPage = () => {
  /* useLayoutEffect(() => {
    let sections = gsap.utils.toArray('section');

    sections.forEach((section: any, index) => {
      const animate = section.querySelector('.animate');
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          toggleActions: 'play none none reverse',
          markers: true,
          scrub: true,
        },
      });

      tl.set(animate, { transformOrigin: 'center center' }).fromTo(
        section,
        { opacity: 0, scale: 0.8, y: '+=100' },
        { opacity: 1, scale: 1, y: 0, duration: 3, immediateRender: false },
      );
    });
  }, []); */

  return (
    <>
      <Projects />
      <About />
      <Experience />
    </>
  );
};

export default Home;
