import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @ViewChild('navBarLinks') links!: ElementRef;
  @ViewChild('navBarMenuIcon') menuIcon!: MatIcon;
  isMobile: boolean = true;

  constructor() {}

  showLinks() {
    const navBarLink = this.links?.nativeElement;
    const display = navBarLink.style.display;
    const menuIcon = this.menuIcon;
    console.log({ menuIcon, display });
    if (display === 'none' || display === '') {
      navBarLink.style.display = 'flex';
      menuIcon.fontIcon = 'close';
    } else {
      navBarLink.style.display = 'none';
      menuIcon.fontIcon = 'menu';
    }
  }

  isMobileView(): boolean {
    return window.innerWidth <= 992;
  }

  hideMobileMenu() {
    this.isMobile = this.isMobileView();

    if (this.isMobile) {
      const navBarLink = this.links?.nativeElement;
      const display = navBarLink.style.display;
      const menuIcon = this.menuIcon;

      navBarLink.style.display = 'none';
      menuIcon.fontIcon = 'menu';
    }
  }
}
