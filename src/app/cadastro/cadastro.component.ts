import { Router } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public readonly NAME_MIN_LENGTH: number = 3;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signup(form: NgForm) {
    console.log('form', form);
    if (form.valid) this.router.navigate(['success'])
    console.log('Invalid form!');
  }

}
