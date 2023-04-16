import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICar } from 'src/app/Models/ICar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseApiUrl :string = 'https://localhost:7136';
  constructor(private http : HttpClient) {}
  getAllCars() : Observable<ICar[]>
    {
      return this.http.get<any[]>(this.baseApiUrl + '/Admin/GetAllCars');
    }

  // SendCarRequest(id:string, carVin:string ,days:number) : Observable<ICar>
  // {
  //   id = '12345678901234';
  //   return this.http.post<Developer>(this.baseApiUrl + '/api/Developer', adddeveloper);
  // }
  // addDeveloper(adddeveloper:Developer) : Observable<Developer>
  // {
  //   adddeveloper.id = '8AA63E57-0000-418B-8CE2-3946C8D4E5FC';
  //   return this.http.post<Developer>(this.baseApiUrl + '/api/Developer', adddeveloper);
  // }
  // getDeveloper(id:string)
  // {
  //   return this.http.get<Developer>(this.baseApiUrl + '/api/Developer/' + id);
  // }
  // updateDeveloper(id:string, developerUpdate:Developer): Observable<Developer>
  // {
  //   return this.http.put<Developer>(this.baseApiUrl + '/api/Developer/'+ id, developerUpdate);
  // }

  // deleteDeveloper(id:string): Observable<Developer>
  // {
  //   return this.http.delete<Developer>(this.baseApiUrl +'/api/Developer/' + id);
  // }
}
