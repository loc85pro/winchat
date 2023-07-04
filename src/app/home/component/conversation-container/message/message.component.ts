import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from 'src/app/home/model/message.model';
import { User } from 'src/app/home/model/user.model';
import { HomeService } from 'src/app/home/service/home.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() data: Message;
  own: boolean = false;
  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    if (this.homeService.currentUser.username == this.data.username)
      this.own = true;
  }
}
