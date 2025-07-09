import { HomeComponent } from './home';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('should render the home page', async () => {
    const user = userEvent.setup();
    await render(HomeComponent);

    const exploreButton = screen.getByRole('link', { name: 'Explore' });
    let isHovered = false;

    exploreButton.addEventListener('mouseover', () => {
      isHovered = true;
    });

    exploreButton.addEventListener('mouseout', () => {
      isHovered = false;
    });

    expect(isHovered).toBeFalsy();

    await user.hover(exploreButton);
    expect(isHovered).toBeTruthy();

    await user.unhover(exploreButton);
    expect(isHovered).toBeFalsy();

    expect(screen.getByText('Space')).toBeInTheDocument();
    expect(exploreButton).toBeInTheDocument();
    expect(exploreButton).toHaveAttribute('href', '/destination');
  });
});
