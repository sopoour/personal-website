import { FC, useEffect } from 'react';
import { BottomLeft, BottomRight, IntroContainer, LeftTop, TopRight } from './styles';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

type Props = {
  children: React.ReactElement;
  className?: string;
};

const GeoBackground: FC<Props> = ({ children, className }) => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const geos = gsap.utils.toArray('.geo');
      const duration = 6;
      const initialState = {
        x: 0,
        y: 0,
        duration,
        ease: 'power3.out',
      };

      geos.forEach((geo: any, index) => {
        const tl = gsap.timeline();
        // start with scale and fade in for all
        tl.fromTo(
          geo,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration,
            ease: 'power3.out',
          },
        );

        // then rotate in two different ways
        index % 2 === 0
          ? tl
              .to(geo, { rotation: 2, duration: 2 })
              .fromTo(
                geo,
                { rotation: 2 },
                { rotation: -3, repeat: -1, duration, yoyo: true, ease: 'power3.out' },
              )
          : tl
              .to(geo, { rotation: -3, duration: 2 })
              .fromTo(
                geo,
                { rotation: -3 },
                { rotation: 3, repeat: -1, duration, yoyo: true, ease: 'power3.out' },
              );
      });

      gsap.fromTo(
        '#left-top',
        {
          x: -100,
          y: -100,
        },
        {
          ...initialState,
        },
      );
      gsap.fromTo(
        '#top-right',
        {
          x: 100,
          y: -50,
        },
        {
          ...initialState,
        },
      );

      gsap.fromTo(
        '#bottom-left',
        {
          x: -100,
          y: 100,
        },
        {
          ...initialState,
        },
      );

      gsap.fromTo(
        '#bottom-right',
        {
          x: 100,
          y: 100,
        },
        {
          ...initialState,
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <IntroContainer className={className}>
      <LeftTop id="left-top" className="geo" />
      <BottomLeft id="bottom-left" className="geo" />
      <BottomRight id="bottom-right" className="geo" />
      <TopRight id="top-right" className="geo" />
      {children}
    </IntroContainer>
  );
};

export default GeoBackground;
