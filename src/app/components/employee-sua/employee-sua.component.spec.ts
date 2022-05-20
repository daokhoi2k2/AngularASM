import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSuaComponent } from './employee-sua.component';

describe('EmployeeSuaComponent', () => {
  let component: EmployeeSuaComponent;
  let fixture: ComponentFixture<EmployeeSuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
