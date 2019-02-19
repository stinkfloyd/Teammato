import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { AuthService } from '../auth.service'
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {

  formData = {
    username: '',
    password: ''
  }

  error = false
  errorMessage = ''

  login(form: NgForm): void {
    this.authService.login(form.value)
      .subscribe(result => {
        if (result.success) {
          this.goTo('teamList')
        }
      }, error => {
        this.error = true
        this.errorMessage = `Invalid Username and/or Password`
      })
  }

  goTo(path): void {
    this.router.navigateByUrl(path)
  }

  constructor(private httpClient: HttpClient, public authService: AuthService, public router: Router, private cookie: CookieService) { }

  ngOnInit() {
    this.error = false
    this.errorMessage = ''
  }

}
