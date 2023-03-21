import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[legalAgeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: LegalAgeDirective,
    multi: true
  }]
})
export class LegalAgeDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    const LEGAL_AGE: number = 18;

    const birthDay: string = control.value;

    const birthYear: number = new Date(birthDay).getFullYear();

    const currentYear: number = new Date().getFullYear();

    const age: number = currentYear - birthYear;

    return age >= LEGAL_AGE ? null : { 'legalAgeValidator': true };

  };

}
