import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Service/department.service';
import { Department } from 'src/app/Model/department.model';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {
  departments:Department[];
  departmentObj:Department=new Department();

  constructor(private departmentService:DepartmentService) { }

  ngOnInit() {
    this.getDepartment();
  }

  getDepartment(){
    this.departmentService.getAllDepartment().subscribe(dep=>{
      console.log(dep);
      this.departments=dep;
    });
  }

  addDepartment(){
    this.departmentService.createDepartment(this.departmentObj).subscribe(dep=>{
      // alert("Department added");
      this.getDepartment();
    });
  }

  deleteDepartment(){
    return this.departmentService.deleteDepartment(this.departmentObj).subscribe(dep=>{
      // alert("Department deleted");
      this.getDepartment();
    })
  }

  deleteId(del){
    this.departmentObj=Object.assign({},del);
  }

  editDepartment(){
    return this.departmentService.updateDepartment(this.departmentObj).subscribe(dep=>{
      // alert("updated");
      this.getDepartment();
    })
  }

}
