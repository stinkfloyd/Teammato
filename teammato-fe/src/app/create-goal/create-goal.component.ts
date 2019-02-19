import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { UserService } from '../user-service.service'
import { NgForm } from '@angular/forms'
import { GoalService } from '../goal.service'
import { identifierModuleUrl, TemplateBinding } from '@angular/compiler'


@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.scss']
})
export class CreateGoalComponent implements OnInit {
  constructor(private goal: GoalService, private router: Router) { }

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onGoalSubmit: EventEmitter<any> = new EventEmitter()

  @Input() teamID
  @Input() username

  formData = {
    title: '',
    desc: '',
    rate: 3,
  }
  error = false
  errorMessage = ''

  // goalSubmit(goal: any) {
  //   this.onGoalSubmit.emit(goal)
  // }

  create(form: NgForm): void {
    const newGoal = {
      title: form.value.title,
      desc: form.value.desc,
      creator: this.username,
      rate: form.value.rate,
      team_id: parseInt(this.teamID, 10),
    }
    this.goal.createGoal(newGoal)
      .subscribe(result => {
        this.formData.title = ''
        this.formData.desc = ''
      }, error => {
      })
  }

  goTo(path): void {
    this.router.navigateByUrl(path)
  }

  ngOnInit() {
  }

}
