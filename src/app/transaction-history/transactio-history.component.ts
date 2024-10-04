import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {AtmService} from '../atm.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Transaction} from '../model';

@Component({
  selector: 'app-transactio-history',
  templateUrl: './transactio-history.component.html',
  styleUrls: ['./transactio-history.component.scss']
})
export class TransactioHistoryComponent implements OnInit , OnChanges {

  displayedColumns: string[] = ['transactionId', 'accountNo', 'time', 'status', 'dispensedAmount'];
  dataSource = new MatTableDataSource<Transaction>(this.atmService.transactions);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public atmService: AtmService) {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    console.log(this.atmService.transactions);
  }

  ngOnChanges(): void {
    console.log(this.atmService.transactions);

  }
}
