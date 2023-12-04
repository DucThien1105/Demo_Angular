import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Kết nối giữa component vs module
const routes: Routes = [
  {
    path: 'project',
    loadChildren: () =>
      import('./project/project.module').then((m) => m.ProjectModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  