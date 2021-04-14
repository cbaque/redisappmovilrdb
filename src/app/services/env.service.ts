import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const apiUlr = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class EnvService {

  constructor(
    private http: HttpClient
  ) { }

  public getQuery<T>(query: string) {
    const HttpUploadOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    query = apiUlr + query;
    return this.http.get<T>(query, HttpUploadOptions).pipe(map((data: any) => data.data));
  }

  public postQuery<T>(query: string, form: any) {
    const HttpUploadOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    query = apiUlr + query;
    return this.http.post<T>(query, form, HttpUploadOptions).pipe(map((data: any) => data.data));
  }


}
