import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenGridEditableComponent } from './gen-grid-editable.component';

describe('GenGridEditableComponent', () => {
  let component: GenGridEditableComponent;
  let fixture: ComponentFixture<GenGridEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenGridEditableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenGridEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
