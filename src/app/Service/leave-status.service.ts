import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { LeaveStatus } from '../Model/leave-status.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LeaveStatusService {

  constructor(private http: HttpClient) { }
  private leaveUrl = 'http://localhost:8080/hrm_system/leave/1';

  getStatusRemainingDays() {
    return this.http.get<LeaveStatus[]>(this.leaveUrl);
  }
}
