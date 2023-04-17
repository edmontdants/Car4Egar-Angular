import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { ISystemUser } from '../Models/isystem-user';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  httpOpsion;

  constructor(private httpclient: HttpClient) {
    this.httpOpsion = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // ,'Authorization': 'Bearer ' + this.
      }),
    };
  }

  RegistrationNewUser(newUser: ISystemUser): Observable<ISystemUser> {
    return this.httpclient.post<ISystemUser>(
      `${environment.apiBaseUrl}/SystemUser/Register`,
      JSON.stringify(newUser),
      this.httpOpsion
    );
  }
}
