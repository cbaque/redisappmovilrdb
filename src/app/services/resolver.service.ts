import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  constructor(
    private dataSrv: DataService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.dataSrv.getData(id);
  }

}
