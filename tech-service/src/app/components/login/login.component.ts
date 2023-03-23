import { Component } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username : string = "";
  password : string = "";

  constructor(private loginService : LoginService){}

  ngOnInit() : void {

  }

  postLogin() : void{
    let login : Login = {
      username : this.username,
      password : this.password
    };

    this.loginService.submitLogin(login).subscribe();
    console.log(login);

  }

}
