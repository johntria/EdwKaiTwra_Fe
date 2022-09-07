import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  initTheme() {
    let currentTheme = this.getCurrentTheme();
    this.switchTheme(currentTheme);
  }

  getCurrentTheme() {
    let theme = localStorage.getItem("app-theme");
    if (!!theme) {
      return theme;
    }

    let defaultTheme = this.document.getElementById('app-theme') as HTMLLinkElement;
    return defaultTheme.href.replace('.css', '');

  }

  setCurrentTheme(theme: string) {
    localStorage.setItem("app-theme", theme);
    this.initTheme();
  }

  switchTheme(theme: string) {
    if (theme == "dark-blue") {
      this.document.body.style.color = "var(--dark-mode-text-color)";
      this.document.body.style.background = "var(--dark-mode-bg-color)"
    }
    if (theme == "light-blue") {
      this.document.body.style.color = "var(--light-mode-text-color)";
      this.document.body.style.background = "var(--light-mode-bg-color)"
    }
    let currentTheme = this.document.getElementById('app-theme') as HTMLLinkElement;
    console.log(theme)
    currentTheme.href = theme + '.css';
  }
}
