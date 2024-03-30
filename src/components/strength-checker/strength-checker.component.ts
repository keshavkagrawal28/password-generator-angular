import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-strength-checker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strength-checker.component.html',
  styleUrl: './strength-checker.component.css',
})
export class StrengthCheckerComponent implements OnInit {
  private _passValue = new BehaviorSubject('');
  @Input() set password(val: string) {
    this._passValue.next(val);
  }
  passStrength: string = 'Very Weak';
  passWordValue = '';

  getPasswordStrength() {
    const passLength = this.passWordValue.length;

    if (passLength < 1) return '';
    else if (passLength < 4) return 'Very Weak';
    else if (passLength < 8) return 'Poor';
    else if (passLength < 12) return 'Medium';
    else if (passLength < 16) return 'Strong';
    else return 'Very Strong';
  }

  ngOnInit(): void {
    this._passValue.subscribe((val) => {
      this.passWordValue = val;
      this.passStrength = this.getPasswordStrength();
    });
  }
}
