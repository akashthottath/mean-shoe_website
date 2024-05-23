import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomersComponent } from './newcomers.component';

describe('NewcomersComponent', () => {
  let component: NewcomersComponent;
  let fixture: ComponentFixture<NewcomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcomersComponent]
    });
    fixture = TestBed.createComponent(NewcomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
