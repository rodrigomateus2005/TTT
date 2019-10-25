import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Principal', component: PrincipalComponent },
  // { path: '', redirectTo: '/Login' },
  // { path: '**', redirectTo: '/Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
