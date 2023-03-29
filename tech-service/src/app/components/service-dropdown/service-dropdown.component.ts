import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-service-dropdown',
  templateUrl: './service-dropdown.component.html',
  styleUrls: ['./service-dropdown.component.scss']
})
export class ServiceDropdownComponent implements OnInit{
  services : Array<string> = ["Tech Support", "Hardware Install", "Tech Consultation", "System Engineering"];
  
  selectedVal : string = ""
  @Output() selectEvent : EventEmitter<string> = new EventEmitter<string>();


  constructor(){}

  ngOnInit(){

  }

  select(){
    this.selectEvent.emit(this.selectedVal);
  }

}
