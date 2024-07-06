import { render, BrowserRouter, describe, it, expect } from '../setupTests';
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
