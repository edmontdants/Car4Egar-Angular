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
////Class////////
export class RegistrationService {
  //Variable//
  httpOpsion;
  //-----------------------------------
  //constructor//
  constructor(private httpclient: HttpClient) {
    this.httpOpsion = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // ,'Authorization': 'Bearer ' + this.
      }),
    };
  }
  //--------------------------------------
  //Methods//
  RegistrationNewUser(newUser: ISystemUser): Observable<ISystemUser> {
    return this.httpclient.post<ISystemUser>(
      `${environment.apiBaseUrl}/SystemUser/Register`,
      JSON.stringify(newUser),
      this.httpOpsion
    );
  }

  getalluser(): Observable<ISystemUser> {
    return this.httpclient.get<ISystemUser>(
      `${environment.apiBaseUrl}/SystemUser/AllUsers`
    );
  }

  getuserByEmail(email:string): Observable<ISystemUser> {
    const data :string = `"${email}"`
    return this.httpclient.post<ISystemUser>(`${environment.apiBaseUrl}/SystemUser/UsersEmail`,
    data,
    this.httpOpsion);
  }

  getuserByNID(nid:string): Observable<ISystemUser> {
    return this.httpclient.get<ISystemUser>(`${environment.apiBaseUrl}/SystemUser/UsersNID`+'/'+nid);
  }

  isloggedin(){
    return sessionStorage.getItem('userNID')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  //--------------------------------------------------------

}
