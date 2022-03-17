import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisteerComponent } from './registeer/registeer.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisteerComponent},
  {path:'home',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
