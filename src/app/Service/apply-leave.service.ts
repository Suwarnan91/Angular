import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApplyLeave } from '../Model/apply-leave.model';

const httpOption= {
  headers:new HttpHeaders({'content-Type':'Application/json'})

}
@Injectable({
  providedIn: 'root'
})
export class ApplyLeaveService {

  constructor(private http:HttpClient) { }
  private applyLeaveUrl='http://localhost:8080/hrm_system/leaveRequest';

  applyLeave(data){
    return this.http.post<ApplyLeave>(this.applyLeaveUrl,data);
  }

  viewLeaveType(){
    return this.http.get<ApplyLeave[]>(this.applyLeaveUrl);
  }
  deleteViewLeave(num){
    return this.http.delete<ApplyLeave>(this.applyLeaveUrl+"/"+num.id);
  }

}
