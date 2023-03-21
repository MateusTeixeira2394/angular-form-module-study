import { CepService } from './../services/cep.service';
import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Directive({
  selector: '[cepValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: CepValidatorDirective,
    multi: true
  }]
})
export class CepValidatorDirective implements AsyncValidator {

  constructor(
    private cepService: CepService
  ) { }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    const cep: string = control.value;

    return this.cepService.getAddress(cep).pipe(
      map(result => result.erro ? { cepValidator: true } : null)
    );

  }



}
