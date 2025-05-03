import { Component } from '@angular/core';
import { NavbarOptionComponent } from './navbar-option/navbar-option.component';
import { Router } from '@angular/router';

export const enum NavbarOption {
  Home = 'Home',
  Balarila = 'Balarila',
  Corruption = 'Corruption',
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarOptionComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  selectedOption: NavbarOption = NavbarOption.Home;
  options = [ NavbarOption.Home, NavbarOption.Balarila, NavbarOption.Corruption ];

  constructor(
    private router: Router
  ) {}

  isSelectedOption(option: NavbarOption) {
    return option == this.selectedOption;
  }

  optionClickHandler(clickedOption: NavbarOption) {
    if (this.selectedOption != clickedOption) {
      this.selectedOption = clickedOption;

      this.router.navigateByUrl(this.convertOptionToUrlPath(clickedOption));
    }
  }

  private convertOptionToUrlPath(option: NavbarOption) {
    switch(option) {
      case NavbarOption.Home:
        return '';
      case NavbarOption.Balarila:
        return '/grammar-checker';
      case NavbarOption.Corruption:
        return '/corruption';
      default:
        return '';
    }
  }
}
