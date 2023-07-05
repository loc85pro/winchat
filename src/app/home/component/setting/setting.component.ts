import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent {
  showUpdatePanel: boolean = false;
  constructor(private route: Router, private httpClient: HttpClient) {}
  handleUpload() {
    this.showUpdatePanel = true;
  }
  onFileSelected(event: any) {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    this.httpClient
      .post('http://localhost:8080/file/uploadAvatar', formData, {
        withCredentials: true,
      })
      .subscribe((val) => console.log(val));
  }
  handleSignout() {
    document.cookie = 'token=' + ';path=/';
    this.route.navigateByUrl('/auth/login');
  }
}
