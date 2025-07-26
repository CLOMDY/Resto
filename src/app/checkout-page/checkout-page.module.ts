import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPagePageRoutingModule } from './checkout-page-routing.module';

import { CheckoutPagePage } from './checkout-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutPagePageRoutingModule
  ],
  declarations: [CheckoutPagePage]
})
export class CheckoutPagePageModule {}
