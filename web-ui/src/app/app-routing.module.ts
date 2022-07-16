import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ReqAdvancedComponent } from './req-advanced/req-advanced.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  { path: 'req', component: RequestComponent},
  { path: 'advanced', component: ReqAdvancedComponent },
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
