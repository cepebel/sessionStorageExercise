
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path: 'log-in', component: LoginFormComponent},
  {path: 'welcome', component: WelcomePageComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
