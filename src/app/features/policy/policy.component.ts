import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})

export class PolicyComponent implements OnInit {
  isVisible: boolean = false;
  detailsVisibility: boolean = false;

  options!: Option[];
  selectedOption!: Option;
  cookiesOptions!: Option[];
  selectedCookiesOption!: Option;

  constructor() { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    if (this.declareVisibility()) {
      setTimeout(() => {
        this.options = [
          { name: 'Cookies', code: 'cookies' },
          { name: 'Πληροφορίες', code: 'about' }
        ];
        this.selectedOption = this.options[0];
        this.cookiesOptions = [
          { name: 'Απαραίτητα', code: 'core' },
          { name: 'Προτίμησεις', code: 'about' },
          { name: 'Στατιστικά', code: 'statistics' },
          { name: 'Marketing', code: 'marketing' }
        ]
        this.selectedCookiesOption = this.cookiesOptions[0];
        this.isVisible = true;
      }, 1000);
    }

  }

  aggreed() {
    localStorage.setItem("policy", "true")
    this.isVisible = !this.isVisible;
  }

  showDetails() {
    this.detailsVisibility = !this.detailsVisibility;
  }

  selectOption(selection: Option) {
    this.selectedOption = selection;
  }

  onChangeOption(event: Option) {
    if (event != null)
      this.selectedCookiesOption = event;

  }

  /** 
   * We declare the visibility of component.
   * If the policy item in local storage exist we hide component else we continue
   * @returns boolean
   */
  declareVisibility(): boolean {
    let cookie = localStorage.getItem("policy")
    if (cookie)
      return false;

    return true;
  }

}

interface Option {
  name: string;
  code: string;
}

