import { render, screen } from '@testing-library/angular';
import { NavbarContainer } from './navbar-container';
import { NavbarService } from '../navbar.service';
import { NAVBAR_LINKS } from '../navbar-links';
import '@testing-library/jest-dom';

// Mock NavbarService
class MockNavbarService {
  activeHref: string = '/';
  isActive(href: string) {
    return href === this.activeHref;
  }
}

describe('NavbarContainer', () => {
  it('should render both desktop and mobile navbars', async () => {
    await render(NavbarContainer, {
      providers: [{ provide: NavbarService, useClass: MockNavbarService }],
    });

    // Desktop navbar should be in the document (even if hidden by CSS)
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    // All navigation links should be present
    NAVBAR_LINKS.forEach((link) => {
      expect(screen.getAllByText(link.label).length).toBeGreaterThan(0);
      expect(screen.getAllByText(link.number).length).toBeGreaterThan(0);
    });
  });
});
