import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CONTACT_CONST } from '../../const/contact-const';

@Component({
  selector: 'app-home',
  imports: [MatIconModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}

  contactClick(contactType: string) {
    switch (contactType) {
      case CONTACT_CONST.PHONE:
        window.open('tel:09954610386', '_blank');
        break;
      case CONTACT_CONST.EMAIL:
        window.open('mailto:princecharles.velarde@gmail.com', '_blank');
        break;
      case CONTACT_CONST.LINKED_IN:
        window.open(
          'https://www.linkedin.com/in/prince-charles-velarde-19798a210',
          '_blank'
        );
        break;
      case CONTACT_CONST.GITHUB:
        window.open('https://github.com/Cha-er-si', '_blank');
        break;
      default:
        break;
    }
  }
}
