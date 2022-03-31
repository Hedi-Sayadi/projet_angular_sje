import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaaaaaaComponent } from './aaaaaaaa.component';

describe('AaaaaaaaComponent', () => {
  let component: AaaaaaaaComponent;
  let fixture: ComponentFixture<AaaaaaaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaaaaaaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaaaaaaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
