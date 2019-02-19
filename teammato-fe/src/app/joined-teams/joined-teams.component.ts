import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { AuthService } from '../auth.service'
import { catchError, tap } from 'rxjs/internal/operators'
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-joined-teams',
  templateUrl: './joined-teams.component.html',
  styleUrls: ['./joined-teams.component.scss']
})
export class JoinedTeamsComponent implements OnInit {

  joinedTeamsList = []


  constructor(private http: HttpClient, private profile: ProfileService, public router: Router, private cookie: CookieService) { }

  ngOnInit() {
    this.profile.getJoinedTeams().subscribe(result => {
      this.joinedTeamsList = result
    })
  }

}
