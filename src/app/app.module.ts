import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { TaskCreateComponent } from './Pages/task-create/task-create.component';
import { HttpClientModule } from '@angular/common/http';
import { UpperCasePipe } from '@angular/common';
import { LoaderComponent } from './Pages/Partials/loader/loader.component';
import { TaskPageComponent } from './Pages/task-page/task-page.component';
import { TaskEditComponent } from './Pages/task-edit/task-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavbarComponent,
    TaskCreateComponent,
    LoaderComponent,
    TaskPageComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UpperCasePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
