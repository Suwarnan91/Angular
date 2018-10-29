import { Component, OnInit } from '@angular/core';
import { LeaveStatusService } from '../Service/leave-status.service';
import { LeaveStatus } from '../Model/leave-status.model';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent implements OnInit {

leaveStatuses:LeaveStatus[];

  constructor(private leaveStatusService:LeaveStatusService) { }

  ngOnInit() {
    this.getStatusRemainingDays();
  }

  getStatusRemainingDays(){
  this.leaveStatusService.getStatusRemainingDays().subscribe(data=>{
    console.log(data);
    this.leaveStatuses=data;
  })
}

}
