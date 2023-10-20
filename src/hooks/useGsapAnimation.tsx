import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const useGsapAnimation = () => {
  useEffect(() => {
    // fadein profile into pic
    gsap
      .fromTo(
        '#profile-intro',
        {
          opacity: 0,
          scale: 0.2,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: 'power3.out',
        },
      )
      // make sure this is always in this order, first fade in then move
      .then(() => {
        /* Profile pic from intro to sidebar animation */
        let logoTl = gsap.timeline({
          scrollTrigger: {
            trigger: '#intro',
            start: 0,
            end: () => window.innerHeight * 1.2,
            scrub: 0.6,
          },
        });
        logoTl.fromTo(
          '#profile-intro',
          {
            yPercent: 0,
            x: 0,
            opacity: 1,
            scale: 1,
          },
          {
            yPercent: 200,
            x: -window.innerWidth * 0.4,
            duration: 1,
            opacity: 0,
            scale: 0.3,
            overwrite: true,
          },
        );

        let logoTl2 = gsap.timeline({
          scrollTrigger: {
            trigger: '#projects',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 0.6,
          },
        });

        logoTl2.fromTo(
          '#profile-sidebar',
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            duration: 0.2,
            opacity: 1,
          },
          0.1,
        );
      });

    // specific elements to be animated
    const sections = gsap.utils.toArray('section');

    sections.forEach((section: any) => {
      const as = section.querySelector('.animate-scale');

      gsap.fromTo(
        as,
        { scale: 0.7 },
        {
          scale: 1,
          scrollTrigger: {
            start: 'top bottom',
            end: 'bottom bottom',
            trigger: section,
            scrub: 1,
          },
        },
      );
    });
  }, []);
};

export default useGsapAnimation;
