import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }
  getPhoto(){
    let url='http://localhost:39493/api/Photo/1';
    return this.http.get<any>(url);
  }
}
