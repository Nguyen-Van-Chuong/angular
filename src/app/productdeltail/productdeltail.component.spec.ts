import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdeltailComponent } from './productdeltail.component';

describe('ProductdeltailComponent', () => {
  let component: ProductdeltailComponent;
  let fixture: ComponentFixture<ProductdeltailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdeltailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdeltailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
