import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { TaskCreateComponent } from './Pages/task-create/task-create.component';
import { TaskPageComponent } from './Pages/task-page/task-page.component';
import { TaskEditComponent } from './Pages/task-edit/task-edit.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home Page' },
  { path: 'about-us', component: AboutPageComponent, title: 'About Page' },
  { path: 'contact-us', component: ContactPageComponent, title: 'Contact Page' },
  { path: 'task', component: TaskPageComponent, title: 'Task List Page' },
  { path: 'task/create', component: TaskCreateComponent, title: 'Task Creation Page' },
  { path: 'task/:id/edit', component: TaskEditComponent, title: 'Task Edit Page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
