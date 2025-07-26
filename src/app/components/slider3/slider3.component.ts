import { Component, OnInit, Input } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-slider3',
  templateUrl: './slider3.component.html',
  styleUrls: ['./slider3.component.scss'],
})
export class Slider3Component  implements OnInit {
  @Input() alldata: any[] = [];

  constructor() { }

  ngOnInit() {}

}
