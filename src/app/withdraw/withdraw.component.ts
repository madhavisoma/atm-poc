import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../model';
import {AtmService} from '../atm.service';
import {AlertComponent} from '../alert/alert.component';
import {MatDialog} from '@angular/material/dialog';
import {AlertService} from '../alert.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {

  accountNo: number;
  pin: number;
  user: User;
  amount: number;

  constructor(private userService: UserService, private atmService: AtmService, private alertService: AlertService) {
  }


  ngOnInit(): void {
    this.user = undefined;
  }

  login(): void {
    this.user = this.userService.isValidUser(this.accountNo, this.pin)[0];
    console.log(this.user);
    if (!this.user) {
      this.alertService.openDialog('Invalid Account/Pin', 'fail', false);
    }
  }

  withdraw(): void {
    this.atmService.withdraw(this.amount, this.user);
  }

}
