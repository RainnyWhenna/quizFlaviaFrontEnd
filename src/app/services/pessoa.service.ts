import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../models/Pessoas';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiUrl = `${environment.ApiUrl}/Pessoa`

  constructor( private http: HttpClient ) { }

  GetPessoas() : Observable<Response<Pessoa[]>> {
   return this.http.get<Response<Pessoa[]>>(this.apiUrl);
  }

  GetMaxIdPessoa(): Observable<number> {
    return this.GetPessoas().pipe(
      map((pessoasResponse: Response<Pessoa[]>) => {
        const pessoas = pessoasResponse.dados;
        const maxIdPessoa = Math.max(...pessoas.map((p: { IdPessoa: any; }) => p.IdPessoa));
        return maxIdPessoa + 1;
      })
    );
  }

  createPessoa(newPessoa: Pessoa) : Observable<any>{
    return this.http.post(`${this.apiUrl}`, newPessoa);
  }
}