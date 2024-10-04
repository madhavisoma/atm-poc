export interface Stocks {
  hundreds: number;
  fifties: number;
  twenties: number;
  tens: number;
  fives: number;
  ones: number;
}

export interface User {
  accountNo: number;
  pin: number;
  accountHolderName: string;
  balance: number;
}

export interface Transaction {
  transactionId: number;
  accountNo: number;
  time: Date;
  status: string;
  dispensedAmount?: number;
}

