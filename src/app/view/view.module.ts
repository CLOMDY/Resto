import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPageRoutingModule } from './view-routing.module';

import { ViewPage } from './view.page';
import { CommonModuleModule } from '../components/common-module/common-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPageRoutingModule,
    CommonModuleModule
  ],
  declarations: [ViewPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewPageModule {}
