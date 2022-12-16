import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Companies } from './companies';
import { catchError, Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  urlBase = 'http://localhost:3000/Company';

  errorHandler!: (
    err: any,
    caught: Observable<Companies>
  ) => ObservableInput<any>;

  constructor(private httpClient: HttpClient) {}

  get(): Observable<Companies[]> {
    return this.httpClient.get<Companies[]>(this.urlBase);
  }

  getById(id: number): Observable<Companies> {
    return this.httpClient
      .get<Companies>(`${this.urlBase}/` + id)
      .pipe(catchError(this.errorHandler));
  }

  post(data: any): Observable<any> {
    return this.httpClient.post(this.urlBase, data);
  }

  update(id: number, company: Companies): Observable<any> {
    return this.httpClient.put<Companies>(`${this.urlBase}/` + id, company);
  }

  delete(id: number): Observable<Companies> {
    return this.httpClient.delete<Companies>(`${this.urlBase}/` + id);
  }
}
