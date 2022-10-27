import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-search-dialog',
    templateUrl: './search-dialog.component.html',
    styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {
    isVisible: boolean;
    inputSearch: string;
    searchSubmitted: boolean;

    constructor() {
        this.isVisible = true;
        this.inputSearch = "";
        this.searchSubmitted = false;
    }

    ngOnInit(): void {

    }

    submitSearch() {
        this.searchSubmitted = !this.searchSubmitted;
    }

}
