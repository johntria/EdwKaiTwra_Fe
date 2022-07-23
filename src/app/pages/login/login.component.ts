import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Tokens } from '@core/models/tokens';
import { AuthService } from '@core/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: UntypedFormGroup;
  constructor(private authService: AuthService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = new UntypedFormGroup({
      email: new UntypedFormControl(''),
      password: new UntypedFormControl('')
    });
  }

  submitForm() {
    this.authService.login(this.form.value).subscribe({
      next: (tokens: Tokens) => {
        this.authService.storeTokens(tokens);
        this.messageService.add({ severity: 'success', key: "success", summary: 'Συνδεθήκατε με επιτυχία ' });
        
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', key: "error", summary: 'Ανεπιτυχής Σύνδεση', detail: err.error.message });
      }
    })
  }


}
