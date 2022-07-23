import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig, public authService: AuthService) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;

  }
}
