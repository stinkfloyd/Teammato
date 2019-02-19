import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { UserService } from '../user-service.service'
import { NgForm } from '@angular/forms'



@Component({
  selector: 'app-join-team',
  templateUrl: './join-team.component.html',
  styleUrls: ['./join-team.component.scss']
})
export class JoinTeamComponent implements OnInit {

  formData = {
    name: '',
  }
  error = false
  errorMessage = ''

  join(form: NgForm): void {
    const name = form.value.name.toLowerCase()
    this.user.joinTeam({ name: name })
      .subscribe(result => {
        if (result) {
          this.goTo('teamList')
        }
      }, error => {
        this.error = true
        switch (error.error.error.message) {
          case 'Team does not exist':
            this.errorMessage = error.error.error.message
            break
          case 'Already on team':
            this.errorMessage = error.error.error.message
            break
          default:
            this.errorMessage = 'Unknown error joining team, please try again.'
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
