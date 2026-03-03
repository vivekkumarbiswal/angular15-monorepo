import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  //Get all
  getProducte(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
  // Get by Id
  getProduct(id: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // POST
  addProduct(product: any): Observable<any>{
    return this.http.post(this.apiUrl, product);
  }
  // PUT (full update)
  updateProduct(id:number, product: any): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  patchProduct(id:number, data: any): Observable<any>{
    return this.http.patch(`${this.apiUrl}/${id}`, data)
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
