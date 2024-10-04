import { Component, OnInit } from '@angular/core';
import {Stocks} from '../model';
import {AtmService} from '../atm.service';

@Component({
  selector: 'app-quantities',
  templateUrl: './qunatitiesof-denomination.component.html',
  styleUrls: ['./qunatitiesof-denomination.component.scss']
})
export class QunatitiesofDenominationComponent implements OnInit {


  stocks: Stocks;


  constructor(public atmService: AtmService) {
  }

  ngOnInit(): void {
    this.stocks = this.atmService.getStocksInfo();
  }



}
