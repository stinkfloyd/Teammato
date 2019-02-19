import { Injectable } from '@angular/core'
import * as io from 'socket.io-client'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private url = 'http://localhost:3000'
  private socket

  constructor() {
    this.socket = io(this.url)
  }

  public sendTeam(team) {
    this.socket.emit('Team', team)
  }

  public sendMessage(message) {
    this.socket.emit('new-message', message)
  }

  public sendGoalAdded(goal) {
    this.socket.emit('new-goal', goal)
  }

  public sendGoalAccepted(goal) {
    this.socket.emit('goal-accepted', goal)
  }

  public sendGoalCompleted(goal) {
    this.socket.emit('goal-completed', goal)
  }

  public sendGoalUncompleted(goal) {
    this.socket.emit('goal-uncompleted', goal)
  }

  public sendGoalDeleted(goal) {
    this.socket.emit('goal-deleted', goal)
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        observer.next(message)
      })
    })
  }

  public getGoals = () => {
    return Observable.create((observer) => {
      this.socket.on('new-goal', (goal) => {
        observer.next(goal)
      })
    })
  }

  public acceptedGoals = () => {
    return Observable.create((observer) => {
      this.socket.on('goal-accepted', (goal) => {
        observer.next(goal)
      })
    })
  }

  public completedGoals = () => {
    return Observable.create((observer) => {
      this.socket.on('goal-completed', (goal) => {
        observer.next(goal)
      })
    })
  }

  public unCompletedGoals = () => {
    return Observable.create((observer) => {
      this.socket.on('goal-uncompleted', (goal) => {
        observer.next(goal)
      })
    })
  }

  public goalDeleted = () => {
    return Observable.create((observer) => {
      this.socket.on('goal-deleted', (goal) => {
        observer.next(goal)
      })
    })
  }
}
