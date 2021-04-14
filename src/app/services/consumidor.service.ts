import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { Data } from '../interfaces/auth';
import { Consumidor } from '../interfaces/consumidor';

@Injectable({
  providedIn: 'root'
})
export class ConsumidorService {

  constructor(
    private DataServ: EnvService
  ) { }

  public setConsumidor(data: Consumidor) {
    return this.DataServ.postQuery<Data>(`/home/regisuser`, data);
  }
}
