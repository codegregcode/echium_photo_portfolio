import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getJournals from '../firebase';
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
  return (
    <>
      {journals.map((journal) => (
        <Link key={journal.name} to={journal.path}>
          <div className="journal">
            <img src={journal.thumb} alt={`${journal.name} thumbnail`} />
            <h5>{journal.name}</h5>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Journals;
