import { Component } from '@angular/core'
import { SidebarService } from './sidebar.service'
import { ProfileService } from './profile.service'
import { Profile } from 'selenium-webdriver/firefox'
import { SocketService } from './socket.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  _opened = false
  title = 'Teammato'
  profile = {}

  constructor(private sidebar: SidebarService, private profileService: ProfileService, ) {
    sidebar.sidebarToggle.subscribe((type) => {
      if (type === 'logout') {
        this._opened = false
        return
      }
      this._toggleSidebar()
    })
  }

  _toggleSidebar() {
    this.profileService.getProfile()
      .subscribe((profile) => {
        this._opened = !this._opened
      })

  }
}
