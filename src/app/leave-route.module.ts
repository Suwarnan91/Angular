import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import { ViewDepartmentComponent } from './department/view-department/view-department.component';
import { ViewRoleComponent } from './role/view-role/view-role.component';
import { ManageLeaveComponent } from './manage-leave/manage-leave.component';
import { AddStatusComponent } from './add-status/add-status.component';
import { ViewUserComponent } from './userDetails/view-user/view-user.component';
import { UserComponent } from './user/user.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { CarryForwardComponent } from './carry-forward/carry-forward.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'department', component:  ViewDepartmentComponent },
  { path: 'role', component:  ViewRoleComponent  },
  { path: 'addLeave', component:  ManageLeaveComponent   },
  { path: 'addStatus', component:  AddStatusComponent  },
  { path: 'addUser', component:  ViewUserComponent  },
  { path: 'user', component:  UserComponent  },
  { path: 'privileges', component:  PrivilegesComponent  },
  { path: 'leaveRequest', component:  LeaveRequestComponent  },
  { path: 'carryForward', component:  CarryForwardComponent  },
 // { path: '', component:  LoginComponent },


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class LeaveRouteModule { }
