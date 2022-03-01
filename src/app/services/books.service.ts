import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError , Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient ) { }


  apiUrl: string = 'https://fakestoreapi.com/products';

headers= new HttpHeaders().set('Content-Type','application/json');



list():Observable<any> {
return this.http.get(this.apiUrl);
console.log(this.http.get(this.apiUrl)) ;
}
// get a signle item
getItem(id:any):Observable<any> {
 return this.http.get(`${this.apiUrl}/${id}`);

}




}
