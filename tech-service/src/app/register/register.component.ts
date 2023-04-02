import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';

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
  @Output()
  accountEvent : EventEmitter<Account> = new EventEmitter<Account>();
  
  constructor(private accountService : AccountService){}
  
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
      id : undefined,
      username : this.username,
      password : this.password,
      isEngineer : this.isEngineer,
      secureToken : undefined,
      serviceRequest : undefined
    };

    this.accountService.submitAccount(this.account).subscribe(json =>{
      this.account = json;
      //account object can be accessed to input component
      this.accountEvent.emit(this.account);
    });

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
