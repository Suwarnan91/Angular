import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserDetails } from '../Model/user-details.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {


  constructor(private http:HttpClient) {}
  private userUrl = 'http://localhost:8080/hrm_system/user'; 

  getAllUser(){
    return this.http.get<UserDetails[]>(this.userUrl);
  }


  createUser(user){
    return this.http.post<UserDetails>(this.userUrl,user);
  }

  updateUser(user){
    return this.http.put<UserDetails>(this.userUrl+"/"+user.id,user);
  }

  deleteUser(user){
    return this.http.delete<UserDetails>(this.userUrl+"/"+user.id);
  }

  
 
}
