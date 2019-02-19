import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

  edit: boolean
  @Input() teamID
  @Input() username
  @Input() creator
  @Input() backlog: []
  // tslint:disable-next-line:no-output-on-prefix
  @Output() newGoalEmit: EventEmitter<any> = new EventEmitter()
  // tslint:disable-next-line:no-output-on-prefix
  @Output() deleteGoalEmit: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {

  }
  acceptGoal = (event) => {
    this.newGoalEmit.next(event)
  }

  removeGoal = (event) => {
    this.deleteGoalEmit.next(event)
  }

  onClick = () => {
    this.edit = !this.edit
  }

}
