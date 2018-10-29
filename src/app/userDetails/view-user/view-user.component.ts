import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/Model/role.model';
import { Department } from 'src/app/Model/department.model';
import { UserDetails } from 'src/app/Model/user-details.model';
import { RoleService } from 'src/app/Service/role.service';
import { DepartmentService } from 'src/app/Service/department.service';
import { UserDetailsService } from 'src/app/Service/user-details.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  users: UserDetails[];
  roles: Role[];
  departments: Department[];
  user: UserDetails = new UserDetails();

  constructor(
    private roleService: RoleService,
    private departmentService: DepartmentService,
    private userDetailsService: UserDetailsService) { }

  ngOnInit() {
    this.getRole();
    this.getDepartment();
    this.getUserDetails();
  }

  getRole() {
    this.roleService.getAllRole().subscribe(rol => {
      console.log(rol);
      this.roles = rol;
    })
  }
  getDepartment() {
    this.departmentService.getAllDepartment().subscribe(dep => {
      console.log(dep);
      this.departments = dep;
    });
  }

  getUserDetails() {
    this.userDetailsService.getAllUser()
      .subscribe(data => {
        this.users = data;
        //  alert(data);
      });
  }

  addUser() {
    this.user.joinDate = new Date(this.user.joinDate);
    console.log(this.user);
    this.userDetailsService.createUser(this.user).subscribe(data => {
      alert("success");
      this.getUserDetails();
    })
  }

  getUserId(id) {
    this.user = Object.assign({}, id);
  }

  editUserDetails() {
    return this.userDetailsService.updateUser(this.user).subscribe(data => {
      // alert(" updated");
      this.getUserDetails();
    });
  }


  deleteUserDetails() {
    return this.userDetailsService.deleteUser(this.user).subscribe(data => {
      // alert("user deleted");
      this.getUserDetails();
    });
  }
}
