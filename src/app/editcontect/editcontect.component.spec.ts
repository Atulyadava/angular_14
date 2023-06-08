import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcontectComponent } from './editcontect.component';

describe('EditcontectComponent', () => {
  let component: EditcontectComponent;
  let fixture: ComponentFixture<EditcontectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcontectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcontectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
