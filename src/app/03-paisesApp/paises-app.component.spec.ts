import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesAppComponent } from './paises-app.component';

describe('PaisesAppComponent', () => {
  let component: PaisesAppComponent;
  let fixture: ComponentFixture<PaisesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
