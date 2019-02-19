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
export class UserService {

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) { }

  createTeam(newTeam): Observable<any> {
    // this gets the user
    return this.http.post<any>(`${baseAPI}/teams`, newTeam, { withCredentials: true }).pipe(
      tap((result) => {
        return result
      })
    )
  }

  joinTeam(teamName): Observable<any> {
    // this gets the user
    return this.http.post<any>(`${baseAPI}/teams/join`, teamName, { withCredentials: true }).pipe(
      tap((result) => {
        return result
      })
    )
  }

  getTeam(id): Observable<any> {
    // this gets the team with the given id
    return this.http.get<any>(`${baseAPI}/teams/team/${id}`, { withCredentials: true }).pipe(
      tap((result) => {
        return result
      })
    )
  }
}
