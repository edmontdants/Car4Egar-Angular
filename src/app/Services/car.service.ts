import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ImCar } from '../Models/im-car';

@Injectable({
  providedIn: 'root'
})
export class CarService {baseApiUrl: string = 'https://localhost:7136'
httpOption;
constructor(private http: HttpClient){
    this.httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // ,'Authorization': 'Bearer ' + this.
      }),
    };
}

getAllCars(): Observable<ImCar[]> {
    return this.http.get<ImCar[]>(this.baseApiUrl + '/Admin/GetAllCars')
}

RegistrationMCar(newCar: ImCar): Observable<ImCar> {
return this.http.post<ImCar>(this.baseApiUrl+'/Owner/RegisterMCar', JSON.stringify(newCar), this.httpOption)}

addCar(car: ImCar): Observable<ImCar> {
    return this.http.post<ImCar>(this.baseApiUrl + '/Owner/RegisterNewCar', car);
}


// updateCar(addCar: Car): Observable<Car[]> {
//     addCar.VIN = '2';
//     return this.http.post<Car[]>(this.baseApiUrl + '/Admin/RegisterNewCar', addCar)
// }
}
