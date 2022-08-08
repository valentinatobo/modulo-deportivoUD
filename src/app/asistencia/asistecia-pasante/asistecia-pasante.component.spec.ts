import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsisteciaPasanteComponent } from './asistecia-pasante.component';

describe('AsisteciaPasanteComponent', () => {
  let component: AsisteciaPasanteComponent;
  let fixture: ComponentFixture<AsisteciaPasanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsisteciaPasanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsisteciaPasanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
