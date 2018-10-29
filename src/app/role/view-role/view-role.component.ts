import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/Service/role.service';
import { Role } from 'src/app/Model/role.model';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {

  roles: Role[];
  roleObj: Role = new Role();

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.getRole();
    // this.roleObj.id=1;
    // this.roleObj.name="Department";

  }

  getRole() {
    this.roleService.getAllRole().subscribe(rol => {
      // console.log(rol);
      this.roles = rol;
    })

  }

  addRole() {
    this.roleService.createRole(this.roleObj).subscribe(rol => {
      // alert("Role added");
      this.getRole();
    });
  }

  deleteRole() {
    return this.roleService.deleteRole(this.roleObj).subscribe(rol => {
      // alert("Role deleted");
      this.getRole();
    });
  }

  deleteId(dele) {
    //alert(this.roleObj.id);
    this.roleObj = Object.assign({}, dele);
  }

  editRole(){
    return this.roleService.updateRole(this.roleObj).subscribe(rol=>{
      alert("Role updated");
      this.getRole();
    })
  }


}
