import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})

export class PolicyComponent implements OnInit {
  isVisible: boolean = false;
  detailsVisibility: boolean = false;

  options: Option[] = [
    { name: 'Cookies', code: 'cookies' },
    { name: 'Πληροφορίες', code: 'about' }
  ]
  selectedOption: Option = this.options[0];
  cookiesOptions: Option[] = [
    { name: 'Απαραίτητα', code: 'core' },
    { name: 'Προτίμησεις', code: 'about' },
    { name: 'Στατιστικά', code: 'statistics' },
    { name: 'Marketing', code: 'marketing' }
  ]
  selectedCookiesOption: Option = this.cookiesOptions[0];

  constructor() { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    if (this.declareVisibility()) {

    }
    setTimeout(() => {
      this.isVisible = true;
    }, 2000);
  }

  aggreed() {
    this.isVisible = !this.isVisible;
  }

  showDetails() {
    this.detailsVisibility = !this.detailsVisibility;
  }

  selectOption(selection: Option) {
    this.selectedOption = selection;
  }

  onChangeOption(event: Option ) {
    if (event != null)
      this.selectedCookiesOption = event;

  }

  declareVisibility(): boolean {
    return true;
  }

}

interface Option {
  name: string;
  code: string;
}

