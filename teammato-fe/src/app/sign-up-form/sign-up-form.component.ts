import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

const baseAPI = 'http://localhost:3000'

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  formData = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  error = false
  errorMessage = ''

  onSubmit() {
    this.error = false
    const newUser = {}
    Object.keys(this.formData).forEach((key) => {
      if (key === 'confirmPassword') { return }
      newUser[key] = this.formData[key]
    })
    this.httpClient.post(`${baseAPI}/users`, newUser)
      .subscribe(data => {
        this.router.navigate(['/login'])
      }, error => {
        this.error = true
        switch (error.error.constraint) {
          case 'users_username_unique':
            this.errorMessage = `Username is already taken.`
            break
          case 'users_email_unique':
            this.errorMessage = `Email has already been used to sign up.`
            break
          default:
            this.errorMessage = `Unknown error signing up, please try again.`
        }
      })
  }

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

}
