import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DishPagePage } from './dish-page.page';

describe('DishPagePage', () => {
  let component: DishPagePage;
  let fixture: ComponentFixture<DishPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DishPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
