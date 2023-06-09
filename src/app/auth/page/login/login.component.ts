import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthenticateService } from '../../service/authenticate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hidePassword: boolean = true;

  signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    remember: new FormControl(false),
  });

  constructor(
    private authenticateService: AuthenticateService,
    private route: Router
  ) {}

  onSubmit(): void {
    const username = this.signInForm.value.username;
    const password = this.signInForm.value.password;
    console.log('submited');
    if (username && password)
      this.authenticateService.login(username, password).subscribe((token) => {
        localStorage.setItem('accessToken', token.accessToken);
        localStorage.setItem('refreshToken', token.refreshToken);
        this.authenticateService.setTokenCookie(token.accessToken);
        this.route.navigateByUrl('/messenger');
      });
  }
}
