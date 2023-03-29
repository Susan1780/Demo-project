import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get<any>("http://localhost:3000/employee")
  }
  postData(users:any){
    return this.http.post<any>("http://localhost:3000/employee",users)
  }
}
