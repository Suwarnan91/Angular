import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Role } from '../Model/role.model';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpObj: HttpClient) { }
  private roleUrl = 'http://localhost:8080/hrm_system/role'


  getAllRole() {
    return this.httpObj.get<Role[]>(this.roleUrl);
  }

  createRole(data) {
    return this.httpObj.post<Role>(this.roleUrl, data);
  }

  deleteRole(num) {
    return this.httpObj.delete<Role>(this.roleUrl + "/" + num.id);
  }

  updateRole(num) {
    return this.httpObj.put<Role>(this.roleUrl + "/" + num.id, num);
  }
}
