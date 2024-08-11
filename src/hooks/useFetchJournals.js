import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import getJournals from '../firebase';

const useFetchJournals = () => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const journalsData = await getJournals();
        journalsData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setJournals(journalsData);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchJournals();
  }, []);

  return journals;
};

export default useFetchJournals;
