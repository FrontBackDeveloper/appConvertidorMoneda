import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsypreguntasfrecuentesComponent } from './tipsypreguntasfrecuentes.component';

describe('TipsypreguntasfrecuentesComponent', () => {
  let component: TipsypreguntasfrecuentesComponent;
  let fixture: ComponentFixture<TipsypreguntasfrecuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsypreguntasfrecuentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsypreguntasfrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
