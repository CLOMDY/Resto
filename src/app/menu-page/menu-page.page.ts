import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { AllDataService } from '../data/all-data.service';

register();

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.page.html',
  styleUrls: ['./menu-page.page.scss'],
})
export class MenuPagePage implements OnInit {
  allpopularData: any[] = [];
  allcatData: any[] = [];
  alldrinkData: any[] = [];
  show = false;
  modalData:any;
  constructor(private menudata: AllDataService) { }

  ngOnInit()
  {
    this.allpopularData = this.menudata.getpopularData();
    this.allcatData = this.menudata.getcategorydata();
    this.alldrinkData = this.menudata.getdrinkdata();
  }

  showModal(data:any){
    this.show = !this.show;
    this.modalData = data;
    console.log(data);
  }

  count = 1;

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count>1) {
      this.count--;
    }
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
