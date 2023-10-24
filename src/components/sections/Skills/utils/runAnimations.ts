import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const getRand = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const runAnimations = () => {
  const tl = gsap?.timeline({
    scrollTrigger: {
      trigger: '#skills',
      start: 'top 50%',
      end: 'bottom bottom',
      scrub: 8,
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
      duration: 0.5,
      stagger: 0.1,
    },
  );

  tl.to('.ball', {
    duration: 0.5,
    ease: 'power1.inOut',
    stagger: 0.2,
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
      stagger: 0.5,
      y: 0,
    },
  );

  gsap.utils.toArray('.ball').forEach((ball: any) => {
    ball?.addEventListener('mouseenter', () => {
      tl.pause();
      gsap.to(ball, { scale: 1.2, zIndex: 100, duration: 0.5 });
    });

    ball?.addEventListener('mouseleave', () => {
      tl.resume();
      gsap.to(ball, { zIndex: 0, scale: 1, duration: 0.5 });
    });
  });
};

export default runAnimations;
