import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'
import { LogInFormComponent } from './log-in-form/log-in-form.component'
import { SplashPageComponent } from './splash-page/splash-page.component'
import { ProfileComponent } from './profile/profile.component'
import { AuthService } from './auth.service'
import { CreateTeamComponent } from './create-team/create-team.component'
import { JoinTeamComponent } from './join-team/join-team.component'
import { TeamViewComponent } from './team-view/team-view.component'
import { TeamListComponent } from './team-list/team-list.component'

const routes: Routes = [
  { path: '', component: SplashPageComponent },
  { path: 'signup', component: SignUpFormComponent },
  { path: 'login', component: LogInFormComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthService] },
  { path: 'createTeam', component: CreateTeamComponent, canActivate: [AuthService] },
  { path: 'joinTeam', component: JoinTeamComponent, canActivate: [AuthService] },
  { path: 'teamView/:id', component: TeamViewComponent, canActivate: [AuthService] },
  { path: 'teamList', component: TeamListComponent, canActivate: [AuthService] },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
