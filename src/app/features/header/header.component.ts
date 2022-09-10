import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  currentTheme!:string;
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-download' },
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' }
    ];
    this.currentTheme= this.getTheme();
  }

  getTheme(){
    return this.themeService.getCurrentTheme();
  }

  changeTheme(theme: string) {
    this.themeService.setCurrentTheme(theme);
    this.currentTheme=theme;
  }
}
