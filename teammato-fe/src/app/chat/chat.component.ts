import { Component, OnInit, Input } from '@angular/core'
import { SocketService } from '../socket.service'
import { UserService } from '../user-service.service'


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message: string
  messages: object[] = []
  timestamp: Date

  @Input() username: string
  @Input() teamName: string

  constructor(private socketService: SocketService, private userService: UserService) {
  }

  sendMessage() {
    this.timestamp = new Date(Date.now())
    const messageObj = {
      message: this.message,
      user: this.username,
      timestamp: this.timestamp
    }
    this.socketService.sendMessage(messageObj)
    this.message = ''
  }

  ngOnInit() {
    this.timestamp = new Date(Date.now())
    this.socketService
      .getMessages()
      .subscribe((message: object) => {
        this.messages.unshift(message)
      })
  }
}
