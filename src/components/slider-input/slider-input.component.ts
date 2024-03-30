import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider-input',
  standalone: true,
  imports: [],
  templateUrl: './slider-input.component.html',
  styleUrl: './slider-input.component.css',
})
export class SliderInputComponent {
  @Input() title = '';
  @Input() value = 0;
  @Input() min = 0;
  @Input() max = 0;

  @Output() handleChange: EventEmitter<any> = new EventEmitter<any>();

  updateSliderValue(event: any) {
    this.handleChange.emit(event);
  }
}
