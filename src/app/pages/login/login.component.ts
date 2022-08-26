import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Tokens } from '@core/models/tokens';
import { AuthService } from '@core/services/auth.service';
import { UserService } from '@core/services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: UntypedFormGroup;
  isDisabled: boolean = false;
  constructor(private authService: AuthService, private userService: UserService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();

  }

  initializeForm() {
    this.form = new UntypedFormGroup({
      email: new UntypedFormControl(),
      password: new UntypedFormControl()
    });
  }

  submitForm() {
    this.isDisabled = true;
    this.authService.login(this.form.value).subscribe({
      next: (tokens: Tokens) => {
        this.authService.storeTokens(tokens);
        this.messageService.add({ severity: 'success', key: "success", summary: 'Συνδεθήκατε με επιτυχία ' });
        this.router.navigate(['home']);
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', key: "error", summary: 'Ανεπιτυχής Σύνδεση', detail: err.error.message });
        this.form.reset();
      },
      complete: () => {
        this.isDisabled = false;
      }
    })
  }
}
