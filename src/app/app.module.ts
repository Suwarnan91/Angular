import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashBoradComponent } from './LeaveType/dash-borad/dash-borad.component';
import { ViewLeaveTypeComponent } from './LeaveType/view-leave-type/view-leave-type.component';
import { AddLeaveTypeComponent } from './LeaveType/add-leave-type/add-leave-type.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { UserComponent } from './user/user.component';

import { ViewDepartmentComponent } from './department/view-department/view-department.component';
import { AdminComponent } from './admin/admin.component';

import { ViewRoleComponent } from './role/view-role/view-role.component';
import { ViewUserComponent } from './userDetails/view-user/view-user.component';
import { LeaveRouteModule } from './leave-route.module';
import { ManageLeaveComponent } from './manage-leave/manage-leave.component';
import { AddStatusComponent } from './add-status/add-status.component';
import { FooterComponent } from './footer/footer.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { CarryForwardComponent } from './carry-forward/carry-forward.component';
import { LoginComponent } from './login/login.component';
import { RoleService } from './Service/role.service';
import {HttpClientModule} from '@angular/common/http';
import {DepartmentService} from './Service/department.service';
import{LeaveTypeService} from './Service/leave-type.service';
import { LeaveStatusService } from './Service/leave-status.service';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    DashBoradComponent,
    ViewLeaveTypeComponent,
    AddLeaveTypeComponent,
    LeaveStatusComponent,
    UserComponent,
   
    ViewDepartmentComponent,
    AdminComponent,
  
    ViewRoleComponent,
    ViewUserComponent,
    ManageLeaveComponent,
    AddStatusComponent,
    FooterComponent,
    PrivilegesComponent,
    LeaveRequestComponent,
    CarryForwardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LeaveRouteModule,
    HttpClientModule,
  ],
  providers: [RoleService,DepartmentService,LeaveTypeService,LeaveStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
