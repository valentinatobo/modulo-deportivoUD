import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsisteciaProfesorComponent } from './asistecia-profesor.component';

describe('AsisteciaProfesorComponent', () => {
  let component: AsisteciaProfesorComponent;
  let fixture: ComponentFixture<AsisteciaProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsisteciaProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsisteciaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
