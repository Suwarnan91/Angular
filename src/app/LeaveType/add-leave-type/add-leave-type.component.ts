import { Component, OnInit } from '@angular/core';
import { ApplyLeaveService } from 'src/app/Service/apply-leave.service';
import { ApplyLeave } from 'src/app/Model/apply-leave.model';
import { Status } from 'src/app/Model/status.model';
import { LeaveTypeService } from 'src/app/Service/leave-type.service';
import { StatusService } from 'src/app/Service/status.service';
import { LeaveType } from 'src/app/Model/leave-type.model';

@Component({
  selector: 'app-add-leave-type',
  templateUrl: './add-leave-type.component.html',
  styleUrls: ['./add-leave-type.component.css']
})
export class AddLeaveTypeComponent implements OnInit {
  public msg:string="test";
  leaveTypes:LeaveType[];
  applyLeaves:ApplyLeave[];
  applyLeaveObj:ApplyLeave=new ApplyLeave();
  status:Status[];

  constructor(
    private applyLeaveService:ApplyLeaveService,
    private leaveTypeService:LeaveTypeService,
    private statusService:StatusService
    ) { }

  ngOnInit() {
    this.viewLeaveType();
  }

  applyLeaveType(){
    this.applyLeaveService.applyLeave(this.applyLeaveObj).subscribe(data=>{
      alert("leave application");
      this.applyLeaveObj=data;
      this.applyLeaveObj.statusId=2;
      this.viewLeaveType();
    })
  }
  addStatus(){
    this.statusService.getAllStatus().subscribe(data=>{
      this.status=data;
    })
  }

  viewLeaveType(){
    return this.leaveTypeService.getAllLeavetype().subscribe(data=>{
      this.leaveTypes=data;
    })
  }

}
