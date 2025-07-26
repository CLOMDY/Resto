import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.scss'],
})
export class Slider2Component  implements OnInit {
  @Input() allcatdata: any[] = [];

  constructor() { }

  ngOnInit() {}

}
