import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { Recuperador } from '../interfaces/recuperador';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecuperadorService {

  constructor(
    private DataServ: EnvService
  ) { }


  public setRecuperador(data: Recuperador) {
    return this.DataServ.postQuery<Data>(`/home/regisuser`, data);
  }
}
