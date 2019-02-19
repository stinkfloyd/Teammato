import { Injectable, EventEmitter, Output } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  @Output() sidebarToggle: EventEmitter<any> = new EventEmitter()

  constructor() { }
}
