import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewMethodsComponent } from './brew-methods.component';

describe('BrewMethodsComponent', () => {
  let component: BrewMethodsComponent;
  let fixture: ComponentFixture<BrewMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
