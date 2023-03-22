import { CoursesPanelComponent } from './courses-panel/courses-panel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path: 'log-in', component: LoginFormComponent},
  {path: 'welcome', component: WelcomePageComponent},
  {path: '', redirectTo: 'log-in', pathMatch: 'full'},
  {path: 'courses', component: CoursesPanelComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
