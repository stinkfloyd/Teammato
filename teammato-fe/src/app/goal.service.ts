import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'
import { tap } from 'rxjs/internal/operators'
import { SocketService } from './socket.service'


const baseAPI = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router, private socket: SocketService) { }

  createGoal(newGoal): Observable<any> {
    // this gets the user
    return this.http.post<any>(`${baseAPI}/goal`, newGoal, { withCredentials: true }).pipe(
      tap((result) => {
        this.socket.sendGoalAdded(result)
        return result
      })
    )
  }

  getGoals(id): Observable<any> {
    // this gets the goals for the team with the given id
    return this.http.get<any>(`${baseAPI}/goal/${id}`, { withCredentials: true }).pipe(
      tap((result) => {
        return result
      })
    )
  }

  acceptGoal(id, username): Observable<any> {
    return this.http.put<any>(`${baseAPI}/goal/${id}`, username, { withCredentials: true }).pipe(
      tap((result) => {
        this.socket.sendGoalAccepted(result)
        return result
      })
    )
  }

  completeGoal(id, username): Observable<any> {
    return this.http.put<any>(`${baseAPI}/goal/${id}/completed`, username, { withCredentials: true }).pipe(
      tap((result) => {
        this.socket.sendGoalCompleted(result)
        return result
      })
    )
  }

  unCompleteGoal(id, username): Observable<any> {
    return this.http.put<any>(`${baseAPI}/goal/${id}/uncomplete`, username, { withCredentials: true }).pipe(
      tap((result) => {
        this.socket.sendGoalUncompleted(result)
        return result
      })
    )
  }

  deleteGoal(id): Observable<any> {
    return this.http.delete<any>(`${baseAPI}/goal/${id}`, { withCredentials: true }).pipe(
      tap((result) => {
        console.log("result: ", result)
        this.socket.sendGoalDeleted(result)
        return result
      })
    )
  }
}
