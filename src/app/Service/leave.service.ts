import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Leave } from '../Model/leave.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  constructor(private http: HttpClient) { }
  private leaveUrl = 'http://localhost:8080/hrm_system/leave';

  public getRemainingLeave(userStr) {
    return this.http.get<Leave[]>(this.leaveUrl + "/"+ userStr);
  }

  public getRemainingLeaveByUidAndLid(userStr,leaveStr) {
    return this.http.get<number>(this.leaveUrl + "/"+ userStr+ "/"+ leaveStr);
  }
  
}
