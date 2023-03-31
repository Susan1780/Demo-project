import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusplanComponent } from './statusplan.component';

describe('StatusplanComponent', () => {
  let component: StatusplanComponent;
  let fixture: ComponentFixture<StatusplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
