import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsisteciaEquipoComponent } from './asistecia-equipo.component';

describe('AsisteciaEquipoComponent', () => {
  let component: AsisteciaEquipoComponent;
  let fixture: ComponentFixture<AsisteciaEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsisteciaEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsisteciaEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
