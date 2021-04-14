import { Injectable } from '@angular/core';
import { Data } from '../interfaces/auth';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  constructor(
    private DataServ: EnvService
  ) { }

  public setDireccion(data: any) {
    return this.DataServ.postQuery<Data>(`/direccion/nuevo`, data);
  }

  public getDireccion() {
    return this.DataServ.getQuery<Data>(`/direccion/lista`);
  }

  public getDireccionRecicladoresMapa(id: number = 0) {
    return this.DataServ.getQuery<Data>(`/direccion/recicladores/${id}`);
  }  

}
