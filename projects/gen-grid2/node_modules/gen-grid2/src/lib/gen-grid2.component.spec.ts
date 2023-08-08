import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenGrid2Component } from './gen-grid2.component';

describe('GenGrid2Component', () => {
  let component: GenGrid2Component;
  let fixture: ComponentFixture<GenGrid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenGrid2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenGrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
