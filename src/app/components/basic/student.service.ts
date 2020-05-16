import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

    baseUrl = 'http://localhost:3000/api/students';


  constructor(private http: HttpClient) { }

  getEmployee(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStudent(student: Object): Observable<Object> {
    console.log("----student------"+student);
    return this.http.post(`${this.baseUrl}`, student);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStudentList(): Observable<any> {
      console.log("in side service angular-----------")
    return this.http.get(`${this.baseUrl}`);
  }
}
