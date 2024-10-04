import {Component, OnInit} from '@angular/core';
import {AtmService} from '../atm.service';
import {Stocks} from '../model';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.scss']
})
export class RestockComponent implements OnInit {

  stocks: Stocks;
  restocks: Stocks = {hundreds: 0, fifties: 0, twenties: 0, tens: 0, fives: 0, ones: 0};


  constructor(private atmService: AtmService) {
  }

  ngOnInit(): void {
    this.stocks = this.atmService.getStocksInfo();
    console.log(this.stocks);
  }

  updateStock() {
    this.atmService.updateStocksInfo(this.restocks);
  }
}
