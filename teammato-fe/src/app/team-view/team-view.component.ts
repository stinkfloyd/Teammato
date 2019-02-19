import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../user-service.service'
import { SocketService } from '../socket.service'
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit {
  id: number
  team = {
    name: '',
    username: '',
    creator_username: '',
  }
  edit: false


  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private user: UserService, public socketService: SocketService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10)
    this.user.getTeam(this.id).subscribe(team => {
      this.team = { ...team }
      this.socketService.sendTeam(team)
    }, error => {
      this.goTo('teamList')
    })
  }

  goTo(path): void {
    this.router.navigateByUrl(path)
  }
}
