import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from '../Model/leave-request.model';
import { LeaveRequestService } from '../Service/leave-request.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {
  leaveRequests: LeaveRequest[];
  leaverequest = new LeaveRequest();

  constructor(private leaveRequestService: LeaveRequestService) {

  }
  ngOnInit() {
    this.getAllLeaveRequest();
  }

  getAllLeaveRequest() {
    this.leaveRequestService.getAllLeaveRequest()
      .subscribe(data => {

        this.leaveRequests = data;
        console.log(data);
      });
  }
  approveLeave(lvRequestId) {
    this.leaverequest.leaveRequestId = lvRequestId;
    this.leaverequest.processedBy = 2;
    this.leaverequest.statusId = 1;
    this.leaverequest.rejectreason = null;
    // console.log(this.processleaverequest);
    this.leaveRequestService.approvedLeaveRequest(this.leaverequest).subscribe(data => {
      alert("Approved");
      this.getAllLeaveRequest();
    })
  }

}
