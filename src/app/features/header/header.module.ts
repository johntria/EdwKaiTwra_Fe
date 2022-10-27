import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.module';
import { HeaderComponent } from './header.component';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [HeaderComponent, SearchDialogComponent],
    exports: [HeaderComponent],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ]
})
export class HeadersModule { }
