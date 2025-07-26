import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignPagePageRoutingModule } from './sign-page-routing.module';

import { SignPagePage } from './sign-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignPagePageRoutingModule
  ],
  declarations: [SignPagePage]
})
export class SignPagePageModule {}
