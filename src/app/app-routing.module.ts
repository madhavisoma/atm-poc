import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {WithdrawComponent} from './withdraw/withdraw.component';
import {RestockComponent} from './restock/restock.component';
import {OverviewComponent} from './overview/overview.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'withdraw', component: WithdrawComponent},
  {path: 'restock', component: RestockComponent},
  {path: 'overview', component: OverviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
