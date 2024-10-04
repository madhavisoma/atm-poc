import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { RestockComponent } from './restock/restock.component';
import { OverviewComponent } from './overview/overview.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './alert/alert.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { QunatitiesofDenominationComponent } from './qunatitiesof-denomination/qunatitiesof-denomination.component';
import { TransactioHistoryComponent } from './transaction-history/transactio-history.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WithdrawComponent,
    RestockComponent,
    OverviewComponent,
    AlertComponent,
    QunatitiesofDenominationComponent,
    TransactioHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    NoopAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
