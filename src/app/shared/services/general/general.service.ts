import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor() {}

  generateTelNumbersForPayload(telNumbers: string): number[] {
    const numbersInputed = telNumbers.split(',');

    const result = [];

    numbersInputed.forEach((telNumer) => {
      if (telNumer.length === 9) {
        result.push(Number(telNumer));
      }
    });

    return result;
  }
}
