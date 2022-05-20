import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuanDetailComponent } from './duan-detail.component';

describe('DuanDetailComponent', () => {
  let component: DuanDetailComponent;
  let fixture: ComponentFixture<DuanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuanDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
