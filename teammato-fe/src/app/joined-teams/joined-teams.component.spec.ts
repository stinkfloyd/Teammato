import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedTeamsComponent } from './joined-teams.component';

describe('JoinedTeamsComponent', () => {
  let component: JoinedTeamsComponent;
  let fixture: ComponentFixture<JoinedTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinedTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
