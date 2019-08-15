import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSelectComponent } from './selectionPage/course-select.component';
import { CourseComponent } from './playPage/course/course.component';

const routes: Routes = [
  { path: 'course/:id', component: CourseComponent },
  { path: '', component: CourseSelectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
