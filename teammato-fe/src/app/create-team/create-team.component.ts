import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { UserService } from '../user-service.service'
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  formData = {
    name: '',
  }
  error = false
  errorMessage = ''

  create(form: NgForm): void {
    this.user.createTeam(form.value)
      .subscribe(result => {
        this.goTo('teamList')
      }, error => {
        this.error = true
        if (error.error.constraint === 'teams_name_unique') {
          this.errorMessage = 'Team name already chosen. Please choose another'
        } else {
          this.errorMessage = 'Unknown error creating team, please try again.'
        }
      })
  }

  goTo(path): void {
    this.router.navigateByUrl(path)
  }
  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
  }

}
