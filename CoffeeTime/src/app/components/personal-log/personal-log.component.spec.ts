import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLogComponent } from './personal-log.component';

describe('PersonalLogComponent', () => {
  let component: PersonalLogComponent;
  let fixture: ComponentFixture<PersonalLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
