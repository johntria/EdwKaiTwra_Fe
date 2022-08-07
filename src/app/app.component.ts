import { Component, ElementRef, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig, private host: ElementRef<HTMLElement>) {
    this.primengConfig.ripple = true;
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
