import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Transaction  } from '../models/transaction';
import { Filter } from '../models/filter';

const headers = new HttpHeaders()
  .set('Authorization', ' Basic Y29kZS1jaGFsbGVuZ2U6cGF5dmlzaW9uZXI=');

@Injectable()
export class TransactionService {
  constructor(private http: HttpClient) {}

  getTransacions(filter: Filter): Promise<Transaction[]> {
    const httpParams = this.getParams(filter);
    return this.http
      .get<Transaction[]>(environment.endpoints.transactions, {
         headers: headers,
         params: httpParams
       })
      .toPromise();
  }

   private getParams(filter: Filter): HttpParams {
     let httpParams = new HttpParams();
      if (filter.transactionType !== '' && filter.currency !== '') {
        httpParams = new HttpParams()
          .set('action', filter.transactionType.toLocaleLowerCase())
          .set('currencyCode', filter.currency)
          .set('orderBy', 'date');
       return httpParams;
      }
      if (filter.currency !== '') {
        httpParams = new HttpParams()
          .set('currencyCode', filter.currency)
          .set('orderBy', 'date');
        return httpParams;
      }
     if (filter.transactionType !== '') {
        httpParams = new HttpParams()
         .set('action', filter.transactionType.toLocaleLowerCase())
         .set('orderBy', 'date');
        return httpParams;
     }
     filter.active = false;
     httpParams = new HttpParams()
       .set('orderBy', 'date');
     return httpParams;
   }
}
