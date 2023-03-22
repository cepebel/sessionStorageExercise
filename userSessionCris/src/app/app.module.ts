import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CourseCardComponent } from './course-card/course-card.component';
import { MatCardModule} from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { FilterPipe } from './pipes/filter.pipe';
import { CoursesPanelComponent } from './courses-panel/courses-panel.component';
import { CoursesTableComponent } from './courses-table/courses-table.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    WelcomePageComponent,
    CourseCardComponent,
    FilterPipe,
    CoursesPanelComponent,
    CoursesTableComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, 
    MatCardModule,
    MatAutocompleteModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
 
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
