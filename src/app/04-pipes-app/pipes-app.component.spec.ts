import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesAppComponent } from './pipes-app.component';

describe('PipesAppComponent', () => {
  let component: PipesAppComponent;
  let fixture: ComponentFixture<PipesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
