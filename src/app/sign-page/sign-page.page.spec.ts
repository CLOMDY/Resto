import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignPagePage } from './sign-page.page';

describe('SignPagePage', () => {
  let component: SignPagePage;
  let fixture: ComponentFixture<SignPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
