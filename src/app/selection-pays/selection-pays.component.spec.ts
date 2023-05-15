import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionPaysComponent } from './selection-pays.component';

describe('SelectionPaysComponent', () => {
  let component: SelectionPaysComponent;
  let fixture: ComponentFixture<SelectionPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionPaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
