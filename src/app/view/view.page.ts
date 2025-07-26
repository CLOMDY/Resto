import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { AllDataService } from '../data/all-data.service';

register();
@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit
{
  allpopularData: any[] = [];

  constructor(private menudata: AllDataService) { }

  ngOnInit()
  {
    this.allpopularData = this.menudata.getpopularData();
  }

}
