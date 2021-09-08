import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPonyReactComponent } from './add-pony-react.component';

describe('AddPonyReactComponent', () => {
  let component: AddPonyReactComponent;
  let fixture: ComponentFixture<AddPonyReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPonyReactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPonyReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
