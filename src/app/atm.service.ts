import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {denom} from './at.constants';
import {Stocks, Transaction} from './model';
import {AlertService} from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AtmService {

  constructor(private userService: UserService, private alertService: AlertService) {
  }

  stocks = {
    hundreds: 10,
    fifties: 10,
    twenties: 10,
    tens: 10,
    fives: 10,
    ones: 10
  };
  withdrawnCurrency: any;
  transactions: Transaction[] = [];
  transactionId = 0;

  getStocksInfo(): Stocks {
    return this.stocks;
  }

  updateStocksInfo(restocks): void {
    this.stocks = {
      hundreds: restocks.hundreds + this.stocks.hundreds,
      fifties: restocks.fifties + this.stocks.fifties,
      twenties: restocks.twenties + this.stocks.twenties,
      tens: restocks.tens + this.stocks.tens,
      fives: restocks.fives + this.stocks.fives,
      ones: restocks.ones + this.stocks.ones
    };
    this.alertService.openDialog('Stock UpdatedSuccessfully', 'success', '', false);

  }

  updateUserInfo(user, amount) {
    this.userService.updateUser(user, amount);
  }


  withdraw(amount, user): void {
    const transaction = {
      transactionId: this.transactionId + 1, accountNo: user.accountNo, dispensedAmount: undefined,
      time: new Date(), status: ''
    };
    if (this.getTotalCash() >= amount) {
      if (user.balance >= amount && this.isSuitableDenominationsAvailable(amount)) {
        this.performWithdrawalTransaction(amount);
        this.updateUserInfo(user, amount);
        transaction.status = 'Amount Withdrawn Successfully';
        console.log('Perform Withdraw');
        transaction.dispensedAmount = amount;
        this.alertService.openDialog('Amount Withdrawn Successfully', 'success', '', true);
      } else {
        transaction.status = 'Invalid Amount';
        this.alertService.openDialog('Invalid Amount', 'fail', '', false);
      }
    } else {
      transaction.status = 'No Cash in ATM';
      this.alertService.openDialog('No Cash in ATM', 'fail', '', false);
    }
    this.transactions.push(transaction);
  }

  isSuitableDenominationsAvailable(amount: number): boolean {
    for (const currentDenomination in this.stocks) {
      // @ts-ignore
      if (amount % denom[currentDenomination] === 0) {
        return true;
      }
    }
    return false;
  }

  getTotalCash(): number {
    return this.stocks.hundreds * 100 + this.stocks.fifties * 50 + this.stocks.twenties * 20 +
      this.stocks.tens * 10 + this.stocks.fives * 5 + this.stocks.ones;
  }

  performWithdrawalTransaction(amt: number): void {
    const requiredCurrency = [];
    const getMoney = (amount, limits) => {
      const recur = (amount, nominals) => {
        if (amount === 0) {
          return {};
        } // success
        if (!nominals.length) {
          return;
        } // failure
        const nominal = nominals[0];
        const count = Math.min(limits[nominal], Math.floor(amount / nominal));
        for (let i = count; i >= 0; i--) {
          const result = recur(amount - i * nominal, nominals.slice(1));
          if (result) {
            return i ? {[nominal]: i, ...result} : result;
          }
        }
      };
      return recur(amount, Object.keys(limits).map(Number).sort((a, b) => b - a));
    };
    const availableStocks = {
      100: this.stocks.hundreds,
      50: this.stocks.fifties,
      20: this.stocks.hundreds,
      10: this.stocks.tens,
      5: this.stocks.fives,
      1: this.stocks.ones
    };
    console.log(getMoney(amt, availableStocks));
    this.updateWithdrawStocks(getMoney(amt, availableStocks));
  }

  updateWithdrawStocks(withdrawStocks: any): void {
    this.withdrawnCurrency = withdrawStocks;
    this.stocks = {
      hundreds: this.stocks.hundreds - (withdrawStocks[100] ? withdrawStocks[100] : 0),
      fifties: this.stocks.fifties - (withdrawStocks[50] ? withdrawStocks[50] : 0),
      twenties: this.stocks.twenties - (withdrawStocks[20] ? withdrawStocks[20] : 0),
      tens: this.stocks.tens - (withdrawStocks[10] ? withdrawStocks[10] : 0),
      fives: this.stocks.fives - (withdrawStocks[5] ? withdrawStocks[5] : 0),
      ones: this.stocks.ones - (withdrawStocks[1] ? withdrawStocks[1] : 0)
    };
    console.log(this.stocks);
  }

}


