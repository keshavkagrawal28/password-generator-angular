import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordGeneratorService {
  constructor() {}

  public password = '';
  public errorMessage = '';

  public generatePassword(checkBoxData: any[], length: number = 0) {
    let charSet = '';
    let generatedPassword = '';

    const selectedOptions = checkBoxData.filter((checkbox) => checkbox.state);

    if (selectedOptions.length === 0) {
      this.errorMessage = 'Select at least one option';
      this.password = '';
      return;
    }

    selectedOptions.forEach((option) => {
      switch (option.title) {
        case 'Include Lowercase Letters':
          charSet += 'abcdefghijklmnopqrstuvwxyz';
          break;
        case 'Include Uppercase Letters':
          charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          break;
        case 'Include Numbers':
          charSet += '0123456789';
          break;
        case 'Include Symbols':
          charSet += '!@#$%^&*()';
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
    this.password = generatedPassword;
    this.errorMessage = '';
  }
}
