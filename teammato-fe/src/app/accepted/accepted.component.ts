import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.scss']
})
export class AcceptedComponent implements OnInit {

  @Input() teamID
  @Input() username
  @Input() creator
  @Input() accepted: []
  // tslint:disable-next-line:no-output-on-prefix
  @Output() completeGoalEmit: EventEmitter<any> = new EventEmitter()
  // tslint:disable-next-line:no-output-on-prefix
  @Output() deleteGoalEmit: EventEmitter<any> = new EventEmitter()
  // tslint:disable-next-line:no-output-on-prefix
  @Output() unCompleteGoalEmit: EventEmitter<any> = new EventEmitter()

  constructor(config: NgbRatingConfig) {
    config.max = 5
    config.readonly = true
  }

  ngOnInit() {
  }

  completeGoal = (event) => {
    this.completeGoalEmit.next(event)
  }

  unCompleteGoal = (event) => {
    this.unCompleteGoalEmit.next(event)
  }
  removeGoal = (event) => {
    this.deleteGoalEmit.next(event)
  }

}
