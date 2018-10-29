import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LeaveType } from '../Model/leave-type.model';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {

  constructor(private httpObj: HttpClient) { }
  private leaveTypeUrl = 'http://localhost:8080/hrm_system/leavetype';

  getAllLeavetype() {
    return this.httpObj.get<LeaveType[]>(this.leaveTypeUrl);
  }

  createLeaveType(data) {
    return this.httpObj.post<LeaveType>(this.leaveTypeUrl, data);
  }

  deleteLeaveType(num) {
    return this.httpObj.delete<LeaveType>(this.leaveTypeUrl + "/" + num.id);
  }

  updateLeaveType(num) {
    return this.httpObj.put<LeaveType>(this.leaveTypeUrl + "/" + num.id, num);
  }
}


