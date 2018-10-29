import { Component, OnInit } from '@angular/core';
import { LeaveType } from 'src/app/Model/leave-type.model';
import { LeaveRequest } from 'src/app/Model/leave-request.model';
import { Leave } from 'src/app/Model/leave.model';
import { LeaveTypeService } from 'src/app/Service/leave-type.service';
import { LeaveRequestService } from 'src/app/Service/leave-request.service';
import { LeaveService } from 'src/app/Service/leave.service';

@Component({
  selector: 'app-view-leave-type',
  templateUrl: './view-leave-type.component.html',
  styleUrls: ['./view-leave-type.component.css']
})
export class ViewLeaveTypeComponent implements OnInit {

  leaveTypes: LeaveType[];
  leaveRequest: LeaveRequest = new LeaveRequest();
  leave: Leave[];

  remainingDays: number;
  validationStatus: boolean = false;
  validationMsg: String = "";
  dateMsg: string = "";
  userId:number=null;


  constructor(private leaveTypeService: LeaveTypeService,
    private leaveRequestService: LeaveRequestService, 
    private leaveService: LeaveService,
    ) { }
  

  ngOnInit() {
  }

}
