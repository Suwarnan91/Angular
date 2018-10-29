import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testProject';

  isloggedIn:boolean=false;

  userName:string;
  password:string;

  userRole:string;

  login(){
    if(this.userName=="admin" && this.password!="1234"){
      this.userRole="admin";
      this.isloggedIn=true;
    }else if(this.userName=="emp" && this.password!="1234"){
      this.userRole="emp";
      this.isloggedIn=true;
    }
 
  }
}
