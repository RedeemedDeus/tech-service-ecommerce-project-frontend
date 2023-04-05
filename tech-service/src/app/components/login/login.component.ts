import { Component, Input } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input()
  login : Login = {};

  constructor(){}

  ngOnInit() : void {

  }

  
}
