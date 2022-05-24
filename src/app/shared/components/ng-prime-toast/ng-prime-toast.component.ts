import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-prime-toast',
  templateUrl: './ng-prime-toast.component.html',
  styleUrls: ['./ng-prime-toast.component.scss']
})
export class NgPrimeToastComponent implements OnInit {
  customBrakePoint: any;
  constructor() { }

  ngOnInit(): void {
    this.customBrakePoint = {
      '64rem': { width: '100%', },
    }
  }

}
