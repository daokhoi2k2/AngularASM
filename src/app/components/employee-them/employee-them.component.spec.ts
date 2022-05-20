import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeThemComponent } from './employee-them.component';

describe('EmployeeThemComponent', () => {
  let component: EmployeeThemComponent;
  let fixture: ComponentFixture<EmployeeThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeThemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
