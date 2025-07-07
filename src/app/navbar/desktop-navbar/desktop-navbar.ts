import { Component } from '@angular/core';
import { NAVBAR_LINKS } from '../navbar-links';

@Component({
  selector: 'app-desktop-navbar',
  imports: [],
  templateUrl: './desktop-navbar.html',
})
export class DesktopNavbar {
  links = NAVBAR_LINKS;
}
