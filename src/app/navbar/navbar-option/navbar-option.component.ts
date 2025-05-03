import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-option',
  standalone: true,
  imports: [],
  templateUrl: './navbar-option.component.html',
  styleUrl: './navbar-option.component.css'
})
export class NavbarOptionComponent {
  @Input() label!: string;
  @Input() isSelected: boolean = false;
  @Output() clickEvent = new EventEmitter<string>();

  clickHandler() {
    this.clickEvent.emit(this.label);
  }
}
