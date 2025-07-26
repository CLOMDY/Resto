import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { Slider2Component } from '../slider2/slider2.component';
import { Slider3Component } from '../slider3/slider3.component';



@NgModule({
  declarations: [SliderComponent, Slider2Component, Slider3Component],
  imports: [
    CommonModule
  ],
  exports: [SliderComponent, Slider2Component, Slider3Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommonModuleModule { }
