import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Transaction  } from '../models/transaction';

@Injectable()
export class TransactionService {
  constructor(private http: HttpClient) {}

  getTransacions(): Promise<Transaction> {
    console.log(environment.endpoints.transactions);
    // return 's';
    return this.http
      .get<Transaction>(environment.endpoints.transactions)
      .toPromise();
    //  return this.http.get(environment.endpoints.transactions);
  }
}
