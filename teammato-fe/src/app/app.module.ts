import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { SidebarModule } from 'ng-sidebar'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { SplashPageComponent } from './splash-page/splash-page.component'
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'
import { LogInFormComponent } from './log-in-form/log-in-form.component'
import { ProfileComponent } from './profile/profile.component'
import { CreateTeamComponent } from './create-team/create-team.component'
import { CreatedTeamsComponent } from './created-teams/created-teams.component'
import { JoinedTeamsComponent } from './joined-teams/joined-teams.component'
import { JoinTeamComponent } from './join-team/join-team.component'
import { TeamViewComponent } from './team-view/team-view.component'
import { TeamListComponent } from './team-list/team-list.component'
import { SocketService } from './socket.service'

import { ChatComponent } from './chat/chat.component'

import { GoalsComponent } from './goals/goals.component'

import { CreateGoalComponent } from './create-goal/create-goal.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BacklogComponent } from './backlog/backlog.component';
import { AcceptedComponent } from './accepted/accepted.component';
import { CompletedComponent } from './completed/completed.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashPageComponent,
    SignUpFormComponent,
    LogInFormComponent,
    ProfileComponent,
    CreateTeamComponent,
    CreatedTeamsComponent,
    JoinedTeamsComponent,
    JoinTeamComponent,
    TeamViewComponent,
    TeamListComponent,
    ChatComponent,
    GoalsComponent,
    CreateGoalComponent,
    BacklogComponent,
    AcceptedComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SidebarModule.forRoot(),
    NgbModule,
  ],
  providers: [
    CookieService,
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
