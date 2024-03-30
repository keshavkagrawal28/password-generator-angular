import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-input',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-input.component.html',
  styleUrl: './checkbox-input.component.css',
})
export class CheckboxInputComponent {
  @Input() checkbox: any;
  @Output() handleCheckboxClick: EventEmitter<any> = new EventEmitter<any>();

  clickCheckbox(event: any) {
    this.handleCheckboxClick.emit(event);
  }
}
