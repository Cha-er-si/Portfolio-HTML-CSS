import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-website';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'custom-email',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'custom-github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/github.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'custom-linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/linkedin.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'custom-phone',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/phone.svg')
    );
  }
}
