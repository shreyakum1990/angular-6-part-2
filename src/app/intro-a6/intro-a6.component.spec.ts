import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroA6Component } from './intro-a6.component';

describe('IntroA6Component', () => {
  let component: IntroA6Component;
  let fixture: ComponentFixture<IntroA6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroA6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroA6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
