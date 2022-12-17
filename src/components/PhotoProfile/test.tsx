import { render, screen } from '@testing-library/react';

import PhotoProfile from '.';

describe('<PhotoProfile />', () => {
  it('should render the heading', () => {
    const { container } = render(<PhotoProfile />);

    expect(
      screen.getByRole('heading', { name: /PhotoProfile/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
