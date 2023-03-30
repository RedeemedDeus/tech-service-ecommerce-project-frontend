import { Component } from '@angular/core';
import { Account } from '../models/account';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username : string = "";
  password : string = "";
  isEngineer : boolean = false;
  selectedType : string = "";
  
  constructor(private registerService : RegisterService){}
  ngOnInit(){
    
  }

  postAccount() : void {
    //set the type of user
    if(this.selectedType == "Worker"){
      this.isEngineer = true;
    }
    else if(this.selectedType == "User"){
      this.isEngineer = false;
    }

    //full account info to post to database
    let account : Account = {
      username : this.username,
      password : this.password,
      isEngineer : this.isEngineer
    };
    this.registerService.submitAccount(account).subscribe();
    console.log(account);
  }
}
