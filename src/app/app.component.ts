import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { checkBoxTypes } from '../utils/constants';
import { PasswordGeneratorService } from '../service/password-generator.service';
import { SliderInputComponent } from '../components/slider-input/slider-input.component';
import { CheckboxInputComponent } from '../components/checkbox-input/checkbox-input.component';
import { ButtonComponent } from '../components/button/button.component';
import { StrengthCheckerComponent } from '../components/strength-checker/strength-checker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SliderInputComponent,
    CheckboxInputComponent,
    ButtonComponent,
    StrengthCheckerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'password-generator-angular';

  constructor(private passService: PasswordGeneratorService) {}

  charLength: number = 4;
  checkBoxData: any;
  copied: boolean = false;

  ngOnInit(): void {
    this.checkBoxData = checkBoxTypes.map((i) => {
      return {
        title: i,
        state: false,
      };
    });
  }

  handleCheckboxChange(index: number) {
    let updatedCheckboxData = [...this.checkBoxData];
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
    this.checkBoxData = updatedCheckboxData;
  }

  handleCopy() {
    let password = this.passService.password;
    navigator.clipboard.writeText(password);
    this.copied = true;

    setTimeout(() => {
      this.copied = false;
    }, 1000);
  }

  generatePass() {
    this.passService.generatePassword(this.checkBoxData, this.charLength);
  }

  getPassWord() {
    return this.passService.password;
  }

  getErrorMessage() {
    return this.passService.errorMessage;
  }

  updateCharLength(event: any) {
    this.charLength = event.target.value;
  }
}
