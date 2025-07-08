import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAVBAR_LINKS } from '../navbar-links';
import { NgClass } from '@angular/common';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-desktop-navbar',
  imports: [NgClass, RouterLink],
  templateUrl: './desktop-navbar.html',
})
export class DesktopNavbar {
  links = NAVBAR_LINKS;
  constructor(private navbarService: NavbarService) {}

  isActive(href: string): boolean {
    return this.navbarService.isActive(href);
  }
}
