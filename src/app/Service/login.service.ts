import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Login } from '../Model/login.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginCredential = new Subject<any>();
  loginCredential$ = this.loginCredential.asObservable();

  private urlLogin = 'http://localhost:8080/hrm_system/login';
  constructor(private http: HttpClient) { }


  public getLoginAuth(login: Login) {
    this.http.post(this.urlLogin, login).subscribe(data => {
      if (data != null) {
        this.loginCredential.next(data);
      } else {
        this.loginCredential.next('error');
      }


    });


  }


  
}
