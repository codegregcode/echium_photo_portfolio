import { Link } from 'react-router-dom';
import { animated } from '@react-spring/web';

import useFetchJournals from '../hooks/useFetchJournals';
import useJournalsAnimation from '../hooks/useJournalsAnimation';

import '../styles/Journals.css';

function Journals() {
  const journals = useFetchJournals();
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
