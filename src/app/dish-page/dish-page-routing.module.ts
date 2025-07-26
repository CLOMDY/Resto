import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishPagePage } from './dish-page.page';

const routes: Routes = [
  {
    path: '',
    component: DishPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DishPagePageRoutingModule {}
