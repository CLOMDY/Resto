import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  scrollToTop() {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }
}
