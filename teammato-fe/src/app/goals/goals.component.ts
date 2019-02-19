import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { identifierModuleUrl } from '@angular/compiler'
import { GoalService } from '../goal.service'
import { SocketService } from '../socket.service'
import { Socket } from 'dgram'

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  edit: boolean
  @Input() teamID
  @Input() username
  @Input() creator
  // tslint:disable-next-line:no-output-on-prefix
  @Output() emit: EventEmitter<any> = new EventEmitter()
  goalList = []
  backlog = []
  accepted = []
  completed = []

  constructor(private goals: GoalService, private socket: SocketService) { }

  ngOnInit() {
    this.getGoals()

    this.socket.getGoals().subscribe((goal) => {
      this.backlog.push(goal)
    })
    this.socket.acceptedGoals().subscribe((goal) => {
      this.backlog = this.backlog.filter(backlog => backlog.id !== goal.id)
      this.accepted.push(goal)
    })
    this.socket.completedGoals().subscribe((goal) => {
      this.accepted = this.accepted.filter(accepted => accepted.id !== goal.id)
      this.completed.push(goal)
    })
    this.socket.unCompletedGoals().subscribe((goal) => {
      this.completed = this.completed.filter(completed => completed.id !== goal.id)
      this.accepted = this.accepted.filter(accepted => accepted.id !== goal.id)
      this.backlog.push(goal)
    })
    this.socket.goalDeleted().subscribe((goal) => {
      this.backlog = this.backlog.filter(backlog => backlog.id !== goal.id)
      this.accepted = this.accepted.filter(accepted => accepted.id !== goal.id)
      this.completed = this.completed.filter(completed => completed.id !== goal.id)
    })
  }

  getGoals = () => {
    this.goals
      .getGoals(this.teamID)
      .subscribe(goals => {
        this.goalList = goals
        this.backlog = goals.filter(goal => !goal.accepted && !goal.completed)
        this.accepted = goals.filter(goal => goal.accepted && !goal.completed)
        this.completed = goals.filter(goal => goal.accepted && goal.completed)
      })
  }

  acceptGoal = (event) => {
    const user = { username: this.username }
    this.goals.acceptGoal(event.target.id, user).subscribe((goal) => {
      // this.getGoals()
    })
  }

  completeGoal = (event) => {
    const user = { username: this.username }
    this.goals.completeGoal(event.target.id, user).subscribe((goal) => {
      // this.getGoals()
    })
  }

  unCompleteGoal = (event) => {
    const user = { username: this.username }
    this.goals.unCompleteGoal(event.target.id, user).subscribe((goal) => {

    })
  }

  removeGoal = (event) => {
    this.goals.deleteGoal(event.target.id).subscribe((goal) => {

    })
  }
}
