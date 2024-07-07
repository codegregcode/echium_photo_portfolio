import { render, screen, describe, it, expect } from '../setupTests';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('renders <p>', () => {
    render(<Footer />);

    const pElement = screen.getByText(/Copyright 2024 Greg Cain/i);

    expect(pElement).toBeInTheDocument();
  });
});
