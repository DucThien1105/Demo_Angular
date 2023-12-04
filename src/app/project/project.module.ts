import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { StudentComponent } from './student/student.component';
import { DetailComponent } from './student/detail/detail.component';
import { FormComponent } from './student/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [StudentComponent, DetailComponent, FormComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
