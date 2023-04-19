import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICar } from 'src/app/Models/ICar';
import { IRentRequest } from 'src/app/Models/IRentRequest';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  NID = String(sessionStorage.getItem('userNID'));
  constructor(private http : HttpClient) { }
  baseApiUrl :string = 'https://localhost:7136/Owner/GetAllRequests';

 public getAllRentalRequests() : Observable<any[]>
{

  return this.http.get<any[]>(this.baseApiUrl);
}


baseApiUrl2 :string = 'https://localhost:7136';
RegisterCar(NewCar:ICar)
{
  return this.http.post(this.baseApiUrl2 + '/Admin/RegisterNewCarVM', NewCar);
}

}

