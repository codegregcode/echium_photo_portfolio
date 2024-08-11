import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animated } from '@react-spring/web';
import getJournals from '../firebase';
import useJournalsAnimation from '../hooks/useJournalsAnimation';

import '../styles/Journals.css';

function Journals() {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const journalsData = await getJournals();
        journalsData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setJournals(journalsData);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchJournals();
  }, []);

  const animationStyles = useJournalsAnimation(journals);

  return (
    <>
      {journals.map((journal, index) => (
        <Link key={journal.name} to={journal.path}>
          <animated.div
            className="journal"
            title={`take me to ${journal.name}`}
            style={animationStyles[index]}
          >
            <img src={journal.thumb} alt={`${journal.name} thumbnail`} />
            <h5>{journal.name}</h5>
          </animated.div>
        </Link>
      ))}
    </>
  );
}

export default Journals;
