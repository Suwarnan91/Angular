import { Component, OnInit } from '@angular/core';
import { Status } from '../Model/status.model';
import { StatusService } from '../Service/status.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.css']
})
export class AddStatusComponent implements OnInit {
statuses:Status[];
statusObj:Status=new Status();

  constructor(private statusService:StatusService) { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus(){
    this.statusService.getAllStatus().subscribe(sta=>{
      console.log(sta);
      this.statuses=sta;
    })
  }

  addStatus(){
    this.statusService.createStatus(this.statusObj).subscribe(sta=>{
      // alert("Status add");
      this.getStatus();
    })
    
  }

  deleteStatus(){
    return this.statusService.deleteStatus(this.statusObj).subscribe(sta=>{
      // alert("Status deleted");
      this.getStatus();
    })
  }

  deleteId(dele){
    this.statusObj=Object.assign({},dele);
  }

  editStatus(){
    return this.statusService.updateStatus(this.statusObj).subscribe(sta=>{
      // alert("Status Updated");
      this.getStatus();
    })
  }
}
