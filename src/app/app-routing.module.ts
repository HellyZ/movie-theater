import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowtimeComponent } from './showtime/showtime.component'

const routes: Routes = [
  {
    path: '',
    component: ShowtimeComponent,
    data: { title: 'Prime Time' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
