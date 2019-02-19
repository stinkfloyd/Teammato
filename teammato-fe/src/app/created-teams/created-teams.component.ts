import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { AuthService } from '../auth.service'
import { catchError, tap } from 'rxjs/internal/operators'
import { ProfileService } from '../profile.service'


@Component({
  selector: 'app-created-teams',
  templateUrl: './created-teams.component.html',
  styleUrls: ['./created-teams.component.scss']
})
export class CreatedTeamsComponent implements OnInit {

  createdTeamsList = []

  constructor(private http: HttpClient, private profile: ProfileService, public router: Router, private cookie: CookieService) { }

  ngOnInit() {
    this.profile.getCreatedTeams().subscribe(result => {
      this.createdTeamsList = result
    })
  }

}
