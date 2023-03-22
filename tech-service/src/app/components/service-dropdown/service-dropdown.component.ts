import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-dropdown',
  templateUrl: './service-dropdown.component.html',
  styleUrls: ['./service-dropdown.component.scss']
})
export class ServiceDropdownComponent implements OnInit{
  opt1 : string = "Tech Support";
  opt2 : string = "Hardware Install";
  opt3 : string = "Tech Consultation";
  opt4 : string = "System Engineering";
  selectedValue : string = "";


  constructor(){}

  ngOnInit(){

  }

}
