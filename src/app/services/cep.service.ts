import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CEP from '../models/cep.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private readonly CEP_BASE_URL: string = 'https://viacep.com.br/ws/';

  constructor(
    private http: HttpClient
  ) { };

  public getAddress(cep: string): Observable<CEP> {

    const url: URL = new URL(`${cep}/json`, this.CEP_BASE_URL);

    return this.http.get<CEP>(url.href);

  }

}
