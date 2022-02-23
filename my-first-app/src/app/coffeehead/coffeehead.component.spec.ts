import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeheadComponent } from './coffeehead.component';

describe('CoffeeheadComponent', () => {
  let component: CoffeeheadComponent;
  let fixture: ComponentFixture<CoffeeheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
