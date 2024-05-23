import { SmallCardsComponent } from './../small-cards/small-cards.component';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent implements OnInit {
  @Input() HEROES:any;
  constructor() { }

  ngOnInit() {
  }

}
