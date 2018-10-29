  import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Department } from '../Model/department.model';

const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  constructor(private httpObj:HttpClient) { }
  private depUrl='http://localhost:8080/hrm_system/department';

  getAllDepartment(){
   return this.httpObj.get<Department[]>(this.depUrl);
  }

  createDepartment(data){
    return this.httpObj.post<Department>(this.depUrl,data);
  }

  deleteDepartment(num){
    return this.httpObj.delete<Department>(this.depUrl+"/"+num.id);
  }

  updateDepartment(num){
    return this.httpObj.put<Department>(this.depUrl+"/"+num.id,num);
  }
}
