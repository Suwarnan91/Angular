import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LeaveRequest } from '../Model/leave-request.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {
  constructor(private http: HttpClient) { }
  private leaveRequestUrl = 'http://localhost:8080/hrm_system/leaverequest';

  public getAllLeaveRequest() {
    return this.http.get<LeaveRequest[]>(this.leaveRequestUrl);
  }
  public getLeaveHistoryByUserId(empId) {
    return this.http.get<LeaveRequest[]>(this.leaveRequestUrl + "/user/" + empId);
  }
  public createLeaveRequest(leaveRequest) {
    return this.http.post<LeaveRequest>(this.leaveRequestUrl, leaveRequest);
  }

  public approvedLeaveRequest(processLeaveRequest) {
    return this.http.post<LeaveRequest>(this.leaveRequestUrl+"/leaveapprove",LeaveRequest);
  }

}
