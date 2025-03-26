import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { canActivate } from './guard/auth-guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'login', component: LoginComponent},
  // {path: 'dashboard', component : DashboardComponent, canActivate: [AuthGuardService]},
  {path: 'dashboard', component : DashboardComponent, canActivate: [canActivate]},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
