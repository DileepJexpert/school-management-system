import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AddFee } from './add-fee/addFee';

@Injectable({
  providedIn: 'root'
})
export class FeeService {

    baseUrl = 'http://localhost:3000/api/fees';


  constructor(private httpClient: HttpClient) { }

  getEmployee(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createFee(fee: Object): Observable<Object> {
    console.log("----fee------"+fee);
    return this.httpClient.post(`${this.baseUrl}`, fee);
  }

 
  getAll(): Observable<AddFee[]> {
    return this.httpClient.get<AddFee[]>(this.baseUrl)
    .pipe(
      catchError(this.errorHandler)
    )
  }

//   getStudentList(): Observable<any> {
//     console.log("in side service angular-----------")
//   return this.http.get(`${this.baseUrl}`);
// }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
