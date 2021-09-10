import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRaceReactComponent } from './add-race-react.component';

describe('AddRaceReactComponent', () => {
  let component: AddRaceReactComponent;
  let fixture: ComponentFixture<AddRaceReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRaceReactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRaceReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
