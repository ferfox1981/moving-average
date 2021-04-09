import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecuperarDadosService {

  constructor(private http: HttpClient) { }

  public recuperarDados() {
    return  this.http.get('https://covid-moving-average.firebaseio.com/covid.json');
  }
}
