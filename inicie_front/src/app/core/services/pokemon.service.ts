import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}
  
  prepareParams(paramsObj: any): HttpParams {
    let searchParams = new HttpParams();
    for (let key in paramsObj) {
      if (paramsObj.hasOwnProperty(key)) {
        searchParams = searchParams.append(key, paramsObj[key]);
      }
    }
    return searchParams;
  }

  listPokemon(payload: any): Observable<any> {
    return this.http.get(`${environment.url_ms}` + '/pokemon', {
      params: this.prepareParams(payload),
    });
  }

  showPokemon(id: any): Observable<any> {
    return this.http.get(`${environment.url_ms}/pokemon/${id}/show`);
  }
}
