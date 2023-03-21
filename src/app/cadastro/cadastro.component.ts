import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import CEP from '../models/cep.model';
import { CepService } from './../services/cep.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public readonly FIELD_MIN_LENGTH: number = 3;

  constructor(
    private router: Router,
    private cepService: CepService
  ) { }

  ngOnInit(): void {
  }

  public signup(form: NgForm) {

    if (form.valid){
      
      this.router.navigate(['success']);

    } else {

      let requiredField: string = '';

    for (const field in form.controls) {
      if (form.controls[field].errors?.['required']) {
        document.getElementById(field)?.focus();
        requiredField = field;
        break;
      };
    };

    alert(`Invalid Form. The ${requiredField} field can't be blank.`);

    };


  };

  public getAddress(event: FocusEvent, form: NgForm): void {

    const regex: RegExp = /(\d{5})(-?\d{3})/g

    const cep: string = (event.target as HTMLInputElement).value;

    if (regex.test(cep)) {

      this.cepService
        .getAddress(cep)
        .subscribe(result => {
          this.fillForm(result, form);
        });

    };

  };

  private fillForm(
    {
      logradouro,
      localidade,
      bairro,
      uf
    }: CEP,
    form: NgForm
  ): void {

    form.form.patchValue({
      address: logradouro,
      city: localidade,
      neighbor: bairro,
      state: uf
    });

  };

  public telMask(event: KeyboardEvent): void {

    const inputElement: HTMLInputElement = event.target as HTMLInputElement;

    let value: string = inputElement.value;

    inputElement.value = value.replace(/[^\d]/g,"");

    if(value.length===11){
      inputElement.value = value.replace(/(\d{2})(\d{5})(\d{4})/g,"($1) $2-$3");
    };

    if(value.length>11){
      inputElement.value = "";
    };

  };

}
