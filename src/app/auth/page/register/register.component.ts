import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthenticateService } from '../../service/authenticate.service';
import { Register } from '../../model/Register.model';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ValidationResponse } from '../../model/ValidationResponse.model';
import { TokenModel } from '../../model/TokenResponse.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  validateUsernameFromAPI =
    (authenticateService: AuthenticateService) =>
    (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.authenticateService.checkUserExisting(control.value).pipe(
        map((response: ValidationResponse) => {
          console.log(response);
          return response.message == 'Accepted'
            ? null
            : { usernameDuplicated: true };
        })
      );
    };
  registerForm: FormGroup = new FormGroup({
    fullname: new FormControl('', Validators.required),
    username: new FormControl(
      '',
      Validators.required,
      this.validateUsernameFromAPI(this.authenticateService)
    ),
    email: new FormControl(
      '',
      Validators.compose([Validators.email, Validators.required])
    ),
    password: new FormControl('', Validators.minLength(7)),
  });
  constructor(
    private authenticateService: AuthenticateService,
    private route: Router
  ) {}

  submit(e: Event) {
    e.preventDefault();
    if (this.registerForm.invalid) {
      return;
    }
    let form: Register = {
      fullName: this.registerForm.value.fullname,
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    };
    const handleResponse = {
      next: (data: TokenModel) => {
        this.authenticateService.setTokenCookie(data.refreshToken);
        this.route.navigateByUrl('/messenger');
      },
      error: (error: HttpErrorResponse) => {
        const status: number = error.status;
      },
      complete: () => {
        console.log('complete');
      },
    };
    this.authenticateService.register(form).subscribe(handleResponse);
  }
}
