import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NavbarOption } from '../navbar.component';

@Component({
  selector: 'app-navbar-option',
  standalone: true,
  imports: [],
  templateUrl: './navbar-option.component.html',
  styleUrl: './navbar-option.component.css'
})
export class NavbarOptionComponent {
  @Input() label!: NavbarOption;
  @Input() isSelected: boolean = false;
  @Output() clickEvent = new EventEmitter<NavbarOption>();

  clickHandler() {
    this.clickEvent.emit(this.label);
  }
}
