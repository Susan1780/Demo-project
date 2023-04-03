import { Component, OnInit } from '@angular/core';
import { TimeService } from 'src/app/service/time.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private ser:TimeService) { }

  ngOnInit(): void {
  }
  name="bala"
  phone="9876454"
  place="mkm"

}
