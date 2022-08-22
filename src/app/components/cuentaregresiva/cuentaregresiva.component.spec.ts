import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaregresivaComponent } from './cuentaregresiva.component';

describe('CuentaregresivaComponent', () => {
  let component: CuentaregresivaComponent;
  let fixture: ComponentFixture<CuentaregresivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaregresivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaregresivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
