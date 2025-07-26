import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPagePageRoutingModule } from './menu-page-routing.module';

import { MenuPagePage } from './menu-page.page';
import { CommonModuleModule } from '../components/common-module/common-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPagePageRoutingModule,
    CommonModuleModule
  ],
  declarations: [MenuPagePage],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuPagePageModule {}
