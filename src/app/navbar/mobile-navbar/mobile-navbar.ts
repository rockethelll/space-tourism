import { Component } from '@angular/core';
import { NAVBAR_LINKS } from '../navbar-links';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-mobile-navbar',
  imports: [NgClass, RouterLink],
  templateUrl: './mobile-navbar.html',
})
export class MobileNavbar {
  isMenuOpen: boolean = false;
  links = NAVBAR_LINKS;

  constructor(private router: Router) {}

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  isActive(href: string): boolean {
    const currentUrl = this.router.url === '/' ? '/home' : this.router.url;
    const linkUrl = href === '/' ? '/home' : href;
    return currentUrl.startsWith(linkUrl);
  }
}
