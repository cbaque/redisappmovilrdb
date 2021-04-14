import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { Data } from '../interfaces/auth';
import { Reciclador, RecicladorPorFecha } from '../interfaces/reciclador';

@Injectable({
  providedIn: 'root'
})
export class RecicladorService {

  constructor(
    private DataServ: EnvService
  ) { }

  public getProductos() {
    return this.DataServ.getQuery<Data>(`/catalogo/getCatalogoProductos`);
  }

  public setReciclador(data: Reciclador) {
    return this.DataServ.postQuery<Data>(`/home/regisuser`, data);
  }

  public getRecicladorFecha(  data: RecicladorPorFecha ) {
    return this.DataServ.getQuery<Data>(`/reciclador/recicladordiahora/${data.dia}/${data.hora}`);
  }

  public setTransaccion( data: any  ) {
    return this.DataServ.postQuery<Data>(`/transaccion/register`, data);
  }

  public getDataDirecciones() {
    return this.DataServ.getQuery<Data>(`/consumidor/direcciones`);
  }

  public getDataAgenda() {
    return this.DataServ.getQuery<Data>(`/reciclador/agenda`);
  }

  public getDataHorariosReciclador( id: any ) {
    return this.DataServ.getQuery<Data>(`/reciclador/horarios/${id}`);
  }


}
