import {
  render,
  screen,
  BrowserRouter,
  describe,
  it,
  expect,
} from '../setupTests';

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
