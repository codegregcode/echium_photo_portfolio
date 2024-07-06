import { render, screen, describe, it, expect } from '../setupTests';
import Index from '../components/Index';

describe('Index', () => {
  it('renders all the <p>s', () => {
    render(<Index />);

    const pOne = screen.getByText(/based in Leeds/i);
    const pTwo = screen.getByText(/snapping away on film/i);
    const pThree = screen.getByText(/follow me on instagram/i);
    const pFour = screen.getByText(/or on lomography/i);
    const pFive = screen.getByText(/see what i've been up to/i);

    expect(pOne).toBeInTheDocument();
    expect(pTwo).toBeInTheDocument();
    expect(pThree).toBeInTheDocument();
    expect(pFour).toBeInTheDocument();
    expect(pFive).toBeInTheDocument();
  });
});
