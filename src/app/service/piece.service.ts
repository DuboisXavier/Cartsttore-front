import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PieceService {

  constructor(private http: HttpClient) { }
 
  getPiece(){
    let url='http://localhost:39493/api/Piece/bycat/';
    return this.http.get<any[]>(url);
  }
  getById(id: number) {
    let url='http://localhost:39493/api/Piece/bycat/';
    return this.http.get<any[]>(url + id);
  }
}