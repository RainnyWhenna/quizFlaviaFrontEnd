import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { Resultado } from '../models/Resultados';
import { environment } from 'src/environments/environment';
import { MergeData } from '../models/MergeData';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  private apiUrl = `${environment.ApiUrl}/Resultado`

  private apiUrlMerge = `${environment.ApiUrl}/MergeData`

  constructor(private http: HttpClient) { 
  }

  GetResultados() : Observable<Response<Resultado[]>> {
    return this.http.get<Response<Resultado[]>>(this.apiUrl);
   }

  createResultado(resultado: Resultado): Observable<Response<Resultado[]>> {
    return this.http.post<Response<Resultado[]>>(this.apiUrl, resultado);
  }

  GetMergeData() : Observable<Response<MergeData[]>> {
    return this.http.get<Response<MergeData[]>>(this.apiUrlMerge);
  }

}