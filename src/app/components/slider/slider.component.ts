import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent  implements OnInit {
  @Input() alldata: any[] = [];
  @Output() selectedSlide: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}

  showModal(data:any){
    this.selectedSlide.emit(data);
  }

}
