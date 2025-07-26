import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignPagePage } from './sign-page.page';

const routes: Routes = [
  {
    path: '',
    component: SignPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignPagePageRoutingModule {}
