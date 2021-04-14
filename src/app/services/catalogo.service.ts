import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { Data } from '../interfaces/auth';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Catalogos } from '../interfaces/catalogo';
import { Productos } from '../interfaces/productos';

const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private CACHE_NIVEL_ESTUDIO$: Observable<Catalogos[]>;
  private CACHE_SECTOR$: Observable<Catalogos[]>;
  private CACHE_PRODUCTOS$: Observable<Productos[]>;
  private CACHE_DIAS$: Observable<Catalogos[]>;
  private CACHE_TIPO_PERSONA$: Observable<Catalogos[]>;

  constructor(
    private DataServ: EnvService
  ) { }

  public listaNivelCatalogos(accion?: string) {
    if (!this.CACHE_NIVEL_ESTUDIO$) {
      this.CACHE_NIVEL_ESTUDIO$ = this.getCatologos(accion).pipe(
        shareReplay(CACHE_SIZE)
      );
    }
    return this.CACHE_NIVEL_ESTUDIO$;
  }

  public listaSectorCatalogos(accion?: string) {
    if (!this.CACHE_SECTOR$) {
      this.CACHE_SECTOR$ = this.getCatologos(accion).pipe(
        shareReplay(CACHE_SIZE)
      );
    }
    return this.CACHE_SECTOR$;
  }

  public listaProductos() {
    if (!this.CACHE_PRODUCTOS$) {
      this.CACHE_PRODUCTOS$ = this.getProductos().pipe(
        shareReplay(CACHE_SIZE)
      );
    }
    return this.CACHE_PRODUCTOS$;
  }


  private getProductos() {
    return this.DataServ.getQuery<Data>(`/catalogo/getCatalogoProductos`);
  }

  public listaDiasRecoleccion(accion?: string) {
    if (!this.CACHE_DIAS$) {
      this.CACHE_DIAS$ = this.getCatologos(accion).pipe(
        shareReplay(CACHE_SIZE)
      );
    }
    return this.CACHE_DIAS$;
  }

  public listaTipoPersona(accion?: string) {
    if (!this.CACHE_TIPO_PERSONA$) {
      this.CACHE_TIPO_PERSONA$ = this.getCatologos(accion).pipe(
        shareReplay(CACHE_SIZE)
      );
    }
    return this.CACHE_TIPO_PERSONA$;
  }


  private getCatologos(accion: string) {
    return this.DataServ.getQuery<Data>(`/catalogo/getCatalogoGeneral/${accion}`);
  }


}
