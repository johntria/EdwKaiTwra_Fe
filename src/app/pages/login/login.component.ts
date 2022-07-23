import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Tokens } from '@core/models/tokens';
import { AuthService } from '@core/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private authService: AuthService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
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
