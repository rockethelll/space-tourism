import { Component } from '@angular/core';
import { DesktopNavbar } from "../desktop-navbar/desktop-navbar";
import { MobileNavbar } from "../mobile-navbar/mobile-navbar";

@Component({
  selector: 'app-navbar-container',
  imports: [DesktopNavbar, MobileNavbar],
  templateUrl: './navbar-container.html',
})
export class NavbarContainer {}
