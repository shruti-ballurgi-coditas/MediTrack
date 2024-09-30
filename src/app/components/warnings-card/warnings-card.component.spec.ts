import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningsCardComponent } from './warnings-card.component';

describe('WarningsCardComponent', () => {
  let component: WarningsCardComponent;
  let fixture: ComponentFixture<WarningsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
