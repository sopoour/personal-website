import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const getRand = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const runAnimations = () => {
  const tl = gsap?.timeline({
    paused: true,
    scrollTrigger: {
      trigger: '#skills',
      start: 'top 100%',
      end: 'bottom bottom',
      scrub: 4,
      toggleActions: 'play none none reverse',
    },
  });

  tl.set('.ball', { x: () => getRand(-100, 100), y: () => getRand(-80, 80) });

  tl.fromTo(
    '.ball',
    {
      scale: () => (getRand(1, 9) / 100.0).toFixed(2),
      ease: 'power1.inOut',
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      ease: 'power1.inOut',
      duration: 2,
      stagger: 0.6,
    },
  );

  tl.to('.ball', {
    duration: 2,
    ease: 'power1.inOut',
    stagger: 0.6,
    x: 0,
    y: 0,
  });

  tl.fromTo(
    '.title',
    {
      opacity: 0,
      y: -50,
    },
    {
      duration: 0.5,
      ease: 'power1.inOut',
      opacity: 1,
      stagger: 0.3,
      y: 0,
    },
  );

  gsap.utils.toArray('.ball').forEach((ball: any) => {
    ball?.addEventListener('mouseenter', () => {
      tl.pause();
      gsap.to(ball, { scale: 1.2, zIndex: 100, opacity: 0.9 });
    });

    ball?.addEventListener('mouseleave', () => {
      tl.resume();
      gsap.to(ball, { zIndex: 0, scale: 1, opacity: 1 });
    });
  });
};

export default runAnimations;
