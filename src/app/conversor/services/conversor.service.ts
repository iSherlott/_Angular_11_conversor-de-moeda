import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Conversao, ConversaoResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ConversorService {
  private readonly BASE_URL = 'https://economia.awesomeapi.com.br/';

  constructor(private http: HttpClient) {}

  converter(conversao: Conversao): Observable<ConversaoResponse> {
    let params = `${conversao.moedaDe}-${conversao.moedaPara}`;

    return this.http
      .get(this.BASE_URL + params)
      .map((response: any) => response[0] as ConversaoResponse)
      .catch((error) => Observable.throw(error));
  }

  cotacaoPara(
    conversaoResponse: ConversaoResponse,
    conversao: Conversao
  ): number {
    if (conversaoResponse === undefined) {
      return 0;
    }

    return conversaoResponse.high;
  }

  cotacaoDe(
    conversaoResponse: ConversaoResponse,
    conversao: Conversao
  ): string {
    if (conversaoResponse === undefined) {
      return '0';
    }

    return (1 / conversaoResponse.high).toFixed(4);
  }

  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }

    return conversaoResponse.create_date;
  }
}
