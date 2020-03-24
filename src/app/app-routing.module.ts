import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OopsComponent } from 'src/app/oops/oops.component';

const routes: Routes = [
  { path:'', component:OopsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
