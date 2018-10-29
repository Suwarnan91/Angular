import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../Service/leave-type.service';
import { LeaveType } from '../Model/leave-type.model';

@Component({
  selector: 'app-manage-leave',
  templateUrl: './manage-leave.component.html',
  styleUrls: ['./manage-leave.component.css']
})
export class ManageLeaveComponent implements OnInit {

  leaveTypes:LeaveType[];
  leaveTypeObj:LeaveType=new LeaveType;

  constructor(private leaveTypeService:LeaveTypeService) { }

  ngOnInit() {
    this. getLeavetype();
  }

  getLeavetype(){
    this.leaveTypeService.getAllLeavetype().subscribe(leave=>{
      console.log(leave);
      this.leaveTypes=leave;
    })
  }
  addLeaveType(){
    this.leaveTypeService.createLeaveType(this.leaveTypeObj).subscribe(leave=>{
      // alert("LeaveType add");
      this.getLeavetype();
    })
  }

  deleteLeaveType(){
    return this.leaveTypeService.deleteLeaveType(this.leaveTypeObj).subscribe(leave=>{
      // alert("LeaveType deleted");
      this.getLeavetype();
    })
  }
  deleteId(del){
    this.leaveTypeObj=Object.assign({},del);
  }

  editLeaveType(){
    return this.leaveTypeService.updateLeaveType(this.leaveTypeObj).subscribe(leave=>{
      //  alert("updated");
      this.getLeavetype();
    })
  }

}
