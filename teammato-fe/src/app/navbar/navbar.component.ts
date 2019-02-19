import { Component, OnInit, Input, Output } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { NavbarService } from '../navbar.service'
import { AuthService } from '../auth.service'
import { logging } from 'protractor'
import { SidebarService } from '../sidebar.service'
import { Sidebar } from 'ng-sidebar'
import { EventEmitter } from 'events'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() _sidebarToggle: EventEmitter = new EventEmitter()


  loggedIn = false
  opened = false

  logoutClick = () => {
    this.sidebar.sidebarToggle.emit('logout')
    this.cookie.delete('token')
    this.changeLoggedIn()
  }

  sidebarToggle = () => {
    this.opened = !this.opened
    this.sidebar.sidebarToggle.emit()
  }

  constructor(private cookie: CookieService, private auth: AuthService, private sidebar: SidebarService) {
    auth.sendLoggedInEvent.subscribe(() => {
      this.changeLoggedIn()
    })
  }

  ngOnInit() {
    const check = this.cookie.get('token')
    if (check === '') {
      this.loggedIn = false
    } else {
      this.loggedIn = true
    }
  }

  changeLoggedIn() {
    this.loggedIn = !this.loggedIn
    return
  }
}
