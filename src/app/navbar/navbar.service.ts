import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private router: Router) { }

  isActive(href: string): boolean {
    const currentUrl = this.router.url === '/' ? '/home' : this.router.url;
    const linkUrl = href === '/' ? '/home' : href;
    return currentUrl.startsWith(linkUrl);
  }
}
