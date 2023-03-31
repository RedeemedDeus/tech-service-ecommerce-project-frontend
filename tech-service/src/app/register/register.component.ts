import { Component } from '@angular/core';
import { Account } from '../models/account';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  account : Account = {};
  username : string = "";
  password : string = "";
  isEngineer : boolean = false;
  selectedType : string = "";

  loggedIn : boolean = false;
  
  constructor(private registerService : RegisterService){}
  
  ngOnInit(){}

  postAccount() : void {
    //set the type of user
    if(this.selectedType == "Worker"){
      this.isEngineer = true;
    }
    else if(this.selectedType == "User"){
      this.isEngineer = false;
    }

    //full account info to post to database
    this.account = {
      username : this.username,
      password : this.password,
      isEngineer : this.isEngineer
    };
    this.registerService.submitAccount(this.account).subscribe();

    this.loggedIn = true;
  }

  logOut() : void {
    alert("Log Out Successful");
    this.account = {};
    console.log(this.account);
    //toggle between signing in and logging out
    this.loggedIn = false;
  }
}
