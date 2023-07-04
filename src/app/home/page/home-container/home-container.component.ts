import { Component } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { Conversation } from '../../model/conversation.model';
import { User } from '../../model/user.model';
import { Participant } from '../../model/participant.model';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent {}
