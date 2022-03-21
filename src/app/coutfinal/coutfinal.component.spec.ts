import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutfinalComponent } from './coutfinal.component';

describe('CoutfinalComponent', () => {
  let component: CoutfinalComponent;
  let fixture: ComponentFixture<CoutfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoutfinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
