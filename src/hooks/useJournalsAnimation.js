import { useState, useEffect } from 'react';
import { useSprings } from '@react-spring/web';

const useJournalsAnimation = (journals) => {
  const [isVisible, setIsVisible] = useState([]);

  useEffect(() => {
    if (journals.length > 0) {
      const showAnimation =
        sessionStorage.getItem('show_journal_animation') !== '1';

      let visibilityArray = Array(journals.length).fill(false);

      journals.forEach((_, index) => {
        const delay = showAnimation ? 4800 + index * 200 : 0;

        setTimeout(() => {
          visibilityArray[index] = true;
          setIsVisible([...visibilityArray]);
        }, delay);
      });

      const totalDelay = showAnimation ? 4800 + journals.length * 200 : 0;
      setTimeout(() => {
        sessionStorage.setItem('show_journal_animation', '1');
      }, totalDelay);
    }
  }, [journals]);

  const springs = useSprings(
    journals.length,
    journals.map((_, index) => ({
      opacity: isVisible[index] ? 1 : 0,
      transform: isVisible[index] ? 'translateY(0px)' : 'translateY(600px)',
    }))
  );

  return springs;
};

export default useJournalsAnimation;
