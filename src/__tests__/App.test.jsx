import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from '../components/App';

describe('App component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
