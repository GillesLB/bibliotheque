import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieTestComponent } from './pie-test.component';

describe('PieTestComponent', () => {
  let component: PieTestComponent;
  let fixture: ComponentFixture<PieTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
