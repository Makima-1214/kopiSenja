import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (selector, options = {}) => {
  const defaults = {
    duration: 0.8,
    opacity: { from: 0, to: 1 },
    y: { from: 30, to: 0 },
    stagger: 0.1,
    ...options
  };

  gsap.utils.toArray(selector).forEach((element, index) => {
    gsap.fromTo(
      element,
      {
        opacity: defaults.opacity.from,
        y: defaults.y.from,
      },
      {
        opacity: defaults.opacity.to,
        y: defaults.y.to,
        duration: defaults.duration,
        delay: index * defaults.stagger,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'top 50%',
          scrub: false,
          markers: false,
        },
      }
    );
  });
};

export const animateHeading = (selector) => {
  gsap.utils.toArray(selector).forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          scrub: false,
        },
      }
    );
  });
};

export const animateCards = (selector) => {
  gsap.utils.toArray(selector).forEach((element, index) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          scrub: false,
        },
      }
    );
  });
};

export const animateImage = (selector) => {
  gsap.utils.toArray(selector).forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 60, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        ease: 'power3.out',
        transformOrigin: 'center center',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          scrub: false,
        },
      }
    );
  });
};
