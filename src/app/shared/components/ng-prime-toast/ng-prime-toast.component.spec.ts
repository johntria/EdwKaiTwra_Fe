import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPrimeToastComponent } from './ng-prime-toast.component';

describe('NgPrimeToastComponent', () => {
  let component: NgPrimeToastComponent;
  let fixture: ComponentFixture<NgPrimeToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPrimeToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPrimeToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
