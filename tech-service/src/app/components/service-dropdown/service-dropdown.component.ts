import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-service-dropdown',
  templateUrl: './service-dropdown.component.html',
  styleUrls: ['./service-dropdown.component.scss']
})
export class ServiceDropdownComponent implements OnInit{
  services : Array<String> = ["Tech Support","Hardware Install","Tech Consultation","System Engineering"]

  selectedValue : string = "";
  @Output()
  selectEvent : EventEmitter<String> = new EventEmitter<String>();


  constructor(){}

  ngOnInit(){

  }

  select(){
    this.selectEvent.emit(this.selectedValue);
  }

}
