import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { ReqAdvancedComponent } from './req-advanced/req-advanced.component';

const routes: Routes = [
  { path: '', component: ActionsComponent},
  { path: 'reqad', component: ReqAdvancedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
