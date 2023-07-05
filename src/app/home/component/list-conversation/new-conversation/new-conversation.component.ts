import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { HomeService } from 'src/app/home/service/home.service';

@Component({
  selector: 'app-new-conversation',
  templateUrl: './new-conversation.component.html',
  styleUrls: ['./new-conversation.component.scss'],
})
export class NewConversationComponent {
  username: String = '';
  errorMessage: String = '';
  @Output() isShow = new EventEmitter();
  constructor(
    private homeService: HomeService,
    private httpClient: HttpClient
  ) {}
  handleSubmit() {
    this.homeService.data.forEach((val) => {
      if (this.username == '') return;
      if (
        val.participant[0].username == this.username ||
        val.participant[1].username == this.username
      ) {
        this.errorMessage = 'Conversation is exist';
        this.username = '';
        return;
      }
    });
    this.httpClient
      .get<[]>('http://localhost:8080/user/get_all_username', {
        withCredentials: true,
      })
      .subscribe((rs) => {
        rs.forEach((val) => {
          if (val == this.username) {
            this.isShow.emit();
            this.httpClient
              .post(
                'http://localhost:8080/conversation/create',
                {
                  username: this.username,
                  id: '123',
                },
                { withCredentials: true }
              )
              .subscribe((val) => this.homeService.prepareData());
          }
        });
      });
  }
}
