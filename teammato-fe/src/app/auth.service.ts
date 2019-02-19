import { Injectable, EventEmitter, Output } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/internal/operators'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'

const baseAPI = 'http://localhost:3000'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  @Output() sendLoggedInEvent: EventEmitter<any> = new EventEmitter()

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) {
  }

  canActivate(): boolean {
    const token = this.cookie.get('token')
    if (token === null || token === '') {
      this.router.navigate(['login'])
      return false
    }
    return true
  }


  login(data): Observable<any> {
    return this.http.post<any>(`${baseAPI}/login`, data, httpOptions).pipe(
      tap((result) => {
        result.success = true
        this.save_token(result)
      })
    )
  }

  private save_token(data) {
    this.sendLoggedInEvent.emit(data.token)
    this.cookie.set('token', data.token)
    return
  }
}
