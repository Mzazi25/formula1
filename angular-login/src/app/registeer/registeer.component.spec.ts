import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteerComponent } from './registeer.component';

describe('RegisteerComponent', () => {
  let component: RegisteerComponent;
  let fixture: ComponentFixture<RegisteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
