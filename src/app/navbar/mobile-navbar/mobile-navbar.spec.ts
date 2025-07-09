import { MobileNavbar } from './mobile-navbar';
import { render, screen } from '@testing-library/angular';
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

beforeEach(() => {
  window.innerWidth = 375;
});

describe('MobileNavbar', () => {
  it('should render the mobile navbar', async () => {
    await render(MobileNavbar, {
      providers: [{ provide: NavbarService, useClass: MockNavbarService }],
    });
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Destination')).toBeInTheDocument();
    expect(screen.getByText('Crew')).toBeInTheDocument();
    expect(screen.getByText('Technology')).toBeInTheDocument();
  });

  it('should display the logo with correct alt', async () => {
    await render(MobileNavbar, {
      providers: [{ provide: NavbarService, useClass: MockNavbarService }],
    });

    const logo = screen.getByAltText('logo');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', expect.stringContaining('logo.svg'));
  });

  it('should render all links with correct number and label', async () => {
    await render(MobileNavbar, {
      providers: [{ provide: NavbarService, useClass: MockNavbarService }],
    });

    NAVBAR_LINKS.forEach((link) => {
      expect(screen.getByText(link.number)).toBeInTheDocument();
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it('should apply active class to the active link', async () => {
    const mockService = new MockNavbarService();
    mockService.activeHref = '/destination';

    await render(MobileNavbar, {
      providers: [{ provide: NavbarService, useValue: mockService }],
    });

    const destinationLink = screen.getByText('Destination').closest('li');
    expect(destinationLink).toHaveClass('border-r-white');

    // The other links should not have the active class
    const homeLink = screen.getByText('Home').closest('li');
    expect(homeLink).not.toHaveClass('border-r-white');
  });

  it('should have routerLink attribute on each link', async () => {
    await render(MobileNavbar, {
      providers: [{ provide: NavbarService, useClass: MockNavbarService }],
    });

    NAVBAR_LINKS.forEach((link) => {
      const anchor = screen.getByText(link.label).closest('a');
      expect(anchor).toHaveAttribute('href', link.href);
    });
  });

  it('should render a <ul> with <li> for each link', async () => {
    await render(MobileNavbar, {
      providers: [{ provide: NavbarService, useClass: MockNavbarService }],
    });

    const ul = document.querySelector('ul');
    expect(ul).toBeInTheDocument();

    const items = ul?.querySelectorAll('li');
    expect(items?.length).toBe(NAVBAR_LINKS.length);
  });
});
