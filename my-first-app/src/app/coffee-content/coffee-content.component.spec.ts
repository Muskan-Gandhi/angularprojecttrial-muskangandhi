import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeContentComponent } from './coffee-content.component';

describe('CoffeeContentComponent', () => {
  let component: CoffeeContentComponent;
  let fixture: ComponentFixture<CoffeeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
