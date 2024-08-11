import { useState, useEffect } from 'react';
import { useSpring } from '@react-spring/web';

const useAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showAnimation =
      sessionStorage.getItem('show_landing_animation') !== '1';

    if (showAnimation) {
      const timer = setTimeout(() => {
        sessionStorage.setItem('show_landing_animation', '1');
      }, 6000);
      return () => clearTimeout(timer);
    }

    return undefined;
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const showAnimation =
    sessionStorage.getItem('show_landing_animation') !== '1';

  const props1 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(-100px)',
    config: { tension: 400, friction: 20 },
    delay: showAnimation ? 800 : 0,
    immediate: !showAnimation,
  });

  const props2 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : 'translateX(-100px)',
    config: { tension: 400, friction: 20 },
    delay: showAnimation ? 1600 : 0,
    immediate: !showAnimation,
  });

  const props3 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(100px)',
    config: { tension: 400, friction: 20 },
    delay: showAnimation ? 2400 : 0,
    immediate: !showAnimation,
  });

  const props4 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : 'translateX(100px)',
    fontSize: 10,
    config: { tension: 400, friction: 20 },
    delay: showAnimation ? 3200 : 0,
    immediate: !showAnimation,
  });

  const props5 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : 'translateX(-100px)',
    fontSize: 10,
    config: { tension: 400, friction: 20 },
    delay: showAnimation ? 4000 : 0,
    immediate: !showAnimation,
  });

  return { isVisible, props1, props2, props3, props4, props5 };
};

export default useAnimation;
