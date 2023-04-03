import { Component, Input } from '@angular/core';
import { Details } from '../models/details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input()
  detail : Details = {};

  constructor(){}
  ngOnInit(){}
}
