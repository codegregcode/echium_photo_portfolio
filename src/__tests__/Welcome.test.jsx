import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Welcome from '../components/Welcome';

describe('Welcome component', () => {
  it('renders Welcome Image - Click Me <img />', () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    const imgElement = screen.getByAltText(/Welcome Image - Click Me/i);

    expect(imgElement).toBeInTheDocument();
  });
});
