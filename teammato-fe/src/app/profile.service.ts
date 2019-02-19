import { Injectable, EventEmitter, Output } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/internal/operators'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'

const baseAPI = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  @Output() sendUserEvent: EventEmitter<any> = new EventEmitter()

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) { }

  getProfile(): Observable<any> {
    // this gets the user
    return this.http.get<any>(`${baseAPI}/profile`, { withCredentials: true }).pipe(
      tap((result) => {
        this.sendUserEvent.emit(result)
      })
    )
  }

  getCreatedTeams(): Observable<any> {
    // this gets the teams the user has created
    return this.http.get<any>(`${baseAPI}/teams/created`, { withCredentials: true }).pipe(
      tap(result => result)
    )
  }

  getJoinedTeams(): Observable<any> {
    // this gets the teams the user has joined
    return this.http.get<any>(`${baseAPI}/teams/joined`, { withCredentials: true }).pipe(
      tap(result => result)
    )
  }
}
