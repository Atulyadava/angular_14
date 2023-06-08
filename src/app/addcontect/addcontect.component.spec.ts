import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcontectComponent } from './addcontect.component';

describe('AddcontectComponent', () => {
  let component: AddcontectComponent;
  let fixture: ComponentFixture<AddcontectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcontectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcontectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
