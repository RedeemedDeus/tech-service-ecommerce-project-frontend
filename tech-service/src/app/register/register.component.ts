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
  engineer : boolean = false;
  selectedType : string = "";
  loggedIn : boolean = false;
  loginstatus : string = "Register OR Login";

  @Output()
  logOutEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  accountEvent : EventEmitter<Account> = new EventEmitter<Account>();
  
  constructor(private accountService : AccountService){}
  
  ngOnInit(){}

  postAccount() : void {
    //set the type of user
    if(this.selectedType == 'Worker'){
      this.engineer = true;
    }
    else{
      this.engineer = false;
    }

    //full account info to post to database
    this.account = {
      username : this.username,
      password : this.password,
      engineer : this.engineer
    };
    this.clearInput();
    this.accountService.submitAccount(this.account).subscribe(json =>{
      this.account = json;
      //account object can be accessed to input component
      //console.log(this.account);
      this.accountEvent.emit(this.account);
    });

    this.loggedIn = true;

    //this.clearInput();
  }


  logIn() : void {
    if(this.selectedType == 'Worker'){
      this.engineer = true;
    }
    else{
      this.engineer = false;
    }

    //full account info to post to database
    this.account = {
      username : this.username,
      password : this.password,
      engineer : this.engineer
    };

    this.accountService.submitLogin(this.account).subscribe(json =>{
      this.account = json;
      //account object can be accessed to input component
      //console.log(this.account);
      this.accountEvent.emit(this.account);
      if(json != null){
        this.loggedIn = true;
      }

    });

    
    if(!this.loggedIn){
      document.getElementById("loginstatus")!.innerText = "INVALID USERNAME OR PASSWORD";
    }
    
  }

  logOut() : void {
    //alert("Log Out Successful");
    this.account = {};
    //console.log(this.account);
    //toggle between signing in and logging out
    this.loggedIn = false;
    this.logOutEvent.emit(this.loggedIn);
  }

  clearInput(){
    let elUname : any = document.getElementById("username") as HTMLInputElement | null;
    elUname.value = "";
    let elPassword : any = document.getElementById("password") as HTMLInputElement | null;
    elPassword.value = "";
    let elUType : any = document.getElementById("userType") as HTMLInputElement | null;
    elUType.value = "";
  }
}
