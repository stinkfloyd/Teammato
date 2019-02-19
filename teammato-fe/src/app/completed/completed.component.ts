import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  @Input() teamID
  @Input() username
  @Input() creator
  @Input() completed: []
  // tslint:disable-next-line:no-output-on-prefix
  @Output() deleteGoalEmit: EventEmitter<any> = new EventEmitter()
  // tslint:disable-next-line:no-output-on-prefix
  @Output() unCompleteGoalEmit: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  unCompleteGoal = (event) => {
    this.unCompleteGoalEmit.next(event)
  }
  removeGoal = (event) => {
    this.deleteGoalEmit.next(event)
  }

}
