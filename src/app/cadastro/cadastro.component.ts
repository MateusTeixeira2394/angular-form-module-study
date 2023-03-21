import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
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
    console.log('form', form);
    if (form.valid) this.router.navigate(['success'])
    console.log('Invalid form!');
  }

  public getAddress(event: FocusEvent, form: NgForm): void {

    const regex: RegExp = /(\d{5})(-?\d{3})/g

    const cep: string = (event.target as HTMLInputElement).value;

    if (regex.test(cep)) {

      this.cepService
        .getAddress(cep)
        .subscribe(result => {
          console.log('form', form);
          console.log('result', result);
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

  }

}
