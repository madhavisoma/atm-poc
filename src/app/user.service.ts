import {Injectable} from '@angular/core';
import {User} from './model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersInfo: User[] = [
    {
      accountNo: 1,
      pin: 7770,
      accountHolderName: 'John',
      balance: 10000
    },
    {
      accountNo: 2,
      accountHolderName: 'Anil Kumar',
      pin: 7770,
      balance: 500
    },
    {
      accountNo: 3,
      pin: 7770,
      accountHolderName: 'Ravi',
      balance: 10000
    },
    {
      accountNo: 4,
      pin: 7770,
      accountHolderName: 'Preethi Sindhia',
      balance: 200
    }
  ];

  constructor() {
  }

  isValidUser(acctNo, pin) {
    return this.usersInfo.filter(user => {
      return user.accountNo === acctNo && user.pin === +pin;
    });
  }

  updateUser(user, amount): void {
    this.usersInfo.forEach(usr => {
      if (usr.accountNo === user.accountNo) {
        usr.balance = usr.balance - amount;
      }
    });
  }
}
