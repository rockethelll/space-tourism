import { Component } from '@angular/core';
import { NAVBAR_LINKS } from '../navbar-links';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-mobile-navbar',
  imports: [NgClass, RouterLink],
  templateUrl: './mobile-navbar.html',
})
export class MobileNavbar {
  isMenuOpen: boolean = false;
  links = NAVBAR_LINKS;

  constructor(private navbarService: NavbarService) {}

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  isActive(href: string): boolean {
    return this.navbarService.isActive(href);
  }
}
