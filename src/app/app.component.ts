import {Component, OnInit} from '@angular/core';
import {ThemeService} from '@core/services/theme.service';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig, private themeService: ThemeService) {
    this.themeService.initTheme();
  }

  ngOnInit() {
    this.themeService.initTheme();
    this.primengConfig.ripple = true;

  }
}
