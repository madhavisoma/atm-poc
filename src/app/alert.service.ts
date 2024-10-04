import {Injectable} from '@angular/core';
import {AlertComponent} from './alert/alert.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public dialog: MatDialog, private router: Router) {
  }

  openDialog(msg, sts, redirectionUrl?, isWithdrawn?): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '450px',
      height: '250px',
      data: {message: msg, status: sts, url: redirectionUrl , withdraw: isWithdrawn}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (redirectionUrl === '' || redirectionUrl) {
        this.router.navigateByUrl(redirectionUrl);
      }
    });
  }
}
