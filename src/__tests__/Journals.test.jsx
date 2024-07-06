import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Journals from '../components/Journals';

import getJournals from '../firebase';

vi.mock('../firebase');

describe('Journals', () => {
  it('displays journals after fetching data', async () => {
    const journalsData = [
      {
        name: 'Journal 1',
        thumb: 'thumb1.jpg',
        path: 'a/path',
      },
      {
        name: 'Journal 2',
        thumb: 'thumb2.jpg',
        path: 'another/path',
      },
    ];

    getJournals.mockResolvedValueOnce(journalsData);

    const { getByText, getByAltText } = render(
      <Router>
        <Journals />
      </Router>
    );

    await waitFor(() => {
      expect(getByText('Journal 1')).toBeInTheDocument();
      expect(getByText('Journal 2')).toBeInTheDocument();
      expect(getByAltText('Journal 1 thumbnail')).toBeInTheDocument();
      expect(getByAltText('Journal 2 thumbnail')).toBeInTheDocument();
    });
  });
});
