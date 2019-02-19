import { Component, OnInit } from '@angular/core'
import { UserService } from '../user-service.service'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { AuthService } from '../auth.service'
import { catchError, tap } from 'rxjs/internal/operators'
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    desc: '',
    photoUrl: '',
  }

  constructor(private http: HttpClient, private profile: ProfileService, public router: Router, private cookie: CookieService) {
    profile.sendUserEvent.subscribe((user) => {
      this.user = { ...user }
    })
  }

  ngOnInit() {

  }

}
