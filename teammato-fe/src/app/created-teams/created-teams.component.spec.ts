import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedTeamsComponent } from './created-teams.component';

describe('CreatedTeamsComponent', () => {
  let component: CreatedTeamsComponent;
  let fixture: ComponentFixture<CreatedTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
